import { Button } from '../ui/button'
import Chat from './chat'

const TitleBlock = () => {
	return (
		<div className='grid grid-cols-1 mt-28 lg:grid-cols-[1fr_1.4fr] gap-8'>
			<div className='flex flex-col justify-start my-36 gap-4 w-[519px]'>
				<h1 className='font-extrabold text-4xl'>ChatGPT: ваш умный помощник</h1>
				<p>
					Экспериментирейте с ChatGPT-4, Midjourney и Claude в одном месте. Без
					Vpn и абонементской платы. Создавайте контент, обрабатывайте данные и
					получайте ответы на вопросы через удобный интерфейс!
				</p>
				<Button className='w-44'>Начать работу</Button>
			</div>
			<Chat />
		</div>
	)
}

export default TitleBlock
