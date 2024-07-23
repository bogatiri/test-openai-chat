import { Send } from 'lucide-react'
import { Configuration, OpenAIApi } from 'openai-edge'
import { useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import ChatBody from './chat-body'
import Chatheader from './chat-header'

export interface IResponseProps {
	content: string
	role: string
}

const Chat = () => {
	const [message, setMessage] = useState('')
	const [response, setResponse] = useState<IResponseProps[]>([])
	const [loading, setLoading] = useState(false)

	const messagesEndRef = useRef<HTMLDivElement>(null)

	const configuration = new Configuration({
		apiKey:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M',
		basePath: 'https://bothub.chat/api/v2/openai/v1'
	})
	const openai = new OpenAIApi(configuration)

	const getCompletion = async () => {
		setLoading(true)
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
			<Chatheader />
			<ChatBody
				loading={loading}
				messagesEndRef={messagesEndRef}
				response={response}
			/>
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
