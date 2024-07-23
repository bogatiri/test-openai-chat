import { Avatar, AvatarImage } from '../ui/avatar'
import { IResponseProps } from './chat'

interface IMessageContentProps {
	message: IResponseProps
}

const MessageContent = ({ message }: IMessageContentProps) => {
	return (
		<div
			className={`flex animate-slideInLeft items-end justify-end gap-2 py-2 max-w-xs ${message.role === 'user' ? 'ml-auto animate-slideInLeft' : 'mr-auto flex-row-reverse animate-slideInRight'} `}
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
	)
}

export default MessageContent
