import { Button } from '../ui/button'

const MidJourney = () => {
	return (
		<div className='w-full h-full px-10 sm:px-20 md:px-20 lg:px-20 xl:32px 2xl:40px 3xl:60px 4xl:px-80 grid grid-rows-[1fr_0.7fr] xl:grid-cols-2  mb-32'>
			<div className='flex relative h-full mt-10 xl:mt-0 w-[400px] lg:w-[630px] xl:ml-auto mx-auto '>
				<img
					className='w-64 lg:w-80 xl:w-96  xl:mx-0 h-56 xl:h-80 absolute top-0 z-10 right-0'
					src='img-1.png'
				></img>
				<img
					className='w-64 lg:w-80 xl:w-96 xl:h-[490px] xl:mx-0 absolute bottom-12 left-0'
					src='img-2.png'
				></img>
				<img
					className='absolute w-64 lg:w-80 xl:w-96 z-20 mx-20 xl:mx-0 max-h-72  left-12 xl:left-32 bottom-0'
					src='img-3.png'
				></img>
			</div>
			<div className='flex flex-col w-full box-content justify-end items-center lg:items-start px-auto my-20  lg:my-40 gap-4 '>
				<h2 className='font-extrabold text-sm self-center xl:text-4xl'>
					Генерация Изображений Через Midjourney
				</h2>
				<p className='text-xs xl:text-md self-center max-w-[500px]'>
					MidJourney - инструмент для создания уникальных изображений. Наши
					алгоритмы помогут вам воплотить в жизнь вашу идею. Начните
					генерировать изображения с MidJourney прямо сейчас! Кликните на кнопку
					ниже, чтобы начать творить.
				</p>
				<Button className='w-44 self-center text-white'>Попробовать Midjourney</Button>
				
			</div>
		</div>
	)
}

export default MidJourney
