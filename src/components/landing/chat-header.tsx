import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Checkbox } from '../ui/checkbox'

const Chatheader = () => {
	return (
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
	)
}

export default Chatheader
