import { LoaderCircle } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { IResponseProps } from './chat'
import MessageContent from './message-content'

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
					<MessageContent
						key={index}
						message={message}
					/>
				))}
			{loading && (
				<div className='flex gap-1 items-center animate-slideInRight'>
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
