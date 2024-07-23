import { Button } from '../ui/button'
import Chat from './chat'

const TitleBlock = () => {
	return (
		<div className='grid px-10 sm:px-20 md:px-20 lg:px-20 xl:32px 2xl:40px 3xl:60px 4xl:px-80 grid-rows-[0.2fr_1.4fr] xl:mt-28 xl:grid-cols-[1fr_1.4fr] gap-8'>
			<div className='flex flex-col justify-center items-center xl:justify-start my-24 xl:my-36 gap-4 xl:w-[519px]'>
				<h1 className='font-extrabold text-4xl'>
					ChatGPT и Midjourney: путь к эффективному решению ваших задач
				</h1>
				<p>
					Откройте потенциал нейросетей с нашим агрегатором для улучшения
					диалогов и роста бизнеса. Полная доступность без VPN и платных
					регистраций!
				</p>
				<Button className='w-44'>Начать работу</Button>
			</div>
			<Chat />
		</div>
	)
}

export default TitleBlock
