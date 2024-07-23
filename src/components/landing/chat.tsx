import { LoaderCircle, Send } from 'lucide-react'
import { Configuration, OpenAIApi } from 'openai-edge'
import { useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'

interface IResponseProps {
	content: string
	role: string
}

const Chat = () => {
	const [message, setMessage] = useState('')
	const [response, setResponse] = useState<IResponseProps[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	const configuration = new Configuration({
		apiKey:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M',
		basePath: 'https://bothub.chat/api/v2/openai/v1'
	})
	const openai = new OpenAIApi(configuration)

	const getCompletion = async () => {
		setLoading(true)
		setError(null)
		try {
			const completion = await openai.createChatCompletion({
				messages: [{ role: 'user', content: message }],
				model: 'gemini-pro'
			})

			const messageContent = (await completion.json()).choices[0].message

			const newMessage: IResponseProps = {
				content: messageContent.content as string,
				role: messageContent.role as string
			}

			setResponse(prevResponse => [...prevResponse, newMessage])
		} catch (error) {
			console.error('Error fetching completion:', error)
		} finally {
			scrollToBottom()
			setLoading(false)
		}
	}

	const scrollToBottom = () => {
		setTimeout(() => {
			if (messagesEndRef.current) {
				messagesEndRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'end',
					inline: 'nearest'
				})
			}
		}, 100)
	}

	const handleSendMessage = () => {
		const newMessage: IResponseProps = {
			content: message,
			role: 'user'
		}

		setResponse(prevResponse => [...prevResponse, newMessage])
		getCompletion()
		scrollToBottom()
		setMessage('')
	}

	return (
		<div className='border-border border flex flex-col h-full rounded-3xl bg-chat relative'>
			<header className='relative border-b w-full p-2 border-border rounded-t-lg flex justify-between'>
				<div className='flex gap-1'>
					<Avatar>
						<AvatarImage src='https://bothub.chat/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-128x128.986912ab.png&w=1920&q=75'></AvatarImage>
						<AvatarFallback>GP</AvatarFallback>
					</Avatar>

					<div className='flex flex-col gap-1'>
						<span>BotHub: ChatGpt & Midjourney</span>
						<span className='opacity-60 text-xs'>bot</span>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<span>Сохранить контекст</span>
					<Checkbox />
				</div>
			</header>
			<main className='h-full max-h-96 overflow-auto custom-scrollbar p-3'>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				{/* <p>{response}</p> */}
				{response &&
					response.map((message, index) => (
						<div
							key={index}
							className={`flex items-end justify-end gap-2 py-2 max-w-xs ${message.role === 'user' ? 'ml-auto' : 'mr-auto flex-row-reverse'} `}
						>
							<div className='flex flex-col gap-1'>
								<span
									className={`text-white font-mono text-sm ${message.role === 'user' && 'ml-auto'}`}
								>
									{message.role === 'assistant' ? 'Gemini Pro' : 'You'}
								</span>
								<span
									lang='ru'
									className={`block break-words hyphens-manual p-2 max-w-[320px] text-sm ${message.role === 'user' ? ' rounded-xl rounded-br-none bg-blue-500' : 'rounded-xl rounded-bl-none bg-purple-900'}`}
								>
									{message.content}
								</span>
							</div>
							<div>
								{message.role === 'assistant' ? (
									<Avatar className='bg-avatar p-1'>
										<AvatarImage src='./Vector.png' />
									</Avatar>
								) : (
									<Avatar className='bg-avatar '>
										<AvatarImage src='./User.png' />
									</Avatar>
								)}
							</div>
						</div>
					))}
				{loading && (
					<div className='flex gap-1 items-center'>
						<Avatar className='bg-avatar p-1'>
							<AvatarImage src='./Vector.png' />
						</Avatar>
						<span
							lang='ru'
							className={`flex gap-2 break-words hyphens-manual p-2 max-w-[320px] text-xs rounded-xl rounded-bl-none bg-purple-900`}
						>
							Gemini generating
							<div className='flex justify-center items-center'>
								<LoaderCircle className='animate-spin h-5 w-5 text-white' />
							</div>
						</span>
					</div>
				)}
				<div ref={messagesEndRef}></div>
			</main>
			<footer className=' w-full p-3 flex items-center'>
				<Input
					value={message}
					className='p-6'
					placeholder='Спроси о чем-нибудь...'
					onKeyDown={e => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault()
							handleSendMessage()
						}
					}}
					onChange={e => setMessage(e.target.value)}
				/>
				<Button
					className='h-6 w-6 p-2 absolute right-5 bg-primary rounded-lg box-content flex items-center justify-center text-white'
					onClick={handleSendMessage}
				>
					<Send />
				</Button>
			</footer>
		</div>
	)
}

export default Chat
