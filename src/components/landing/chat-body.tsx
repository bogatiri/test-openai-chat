import { LoaderCircle } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { IResponseProps } from './chat'

interface IChatBodyProps {
	response: IResponseProps[]
	loading: boolean
	messagesEndRef: React.RefObject<HTMLDivElement>
}

const ChatBody = ({ response, loading, messagesEndRef }: IChatBodyProps) => {
	return (
		<main className='h-full max-h-96 overflow-auto custom-scrollbar p-3'>
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
	)
}

export default ChatBody
