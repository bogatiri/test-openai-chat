import { Button } from '../ui/button'

const MidJourney = () => {
	return (
		<div className='w-full grid grid-cols-1 lg:grid-cols-2 px-80 mb-32'>
			<div className='flex relative w-[630px] ml-auto'>
				<img
					className='w-96 h-80 absolute top-0 z-10 right-0'
					src='img-1.png'
				></img>
				<img
					className='w-96 h-[490px] absolute bottom-12 left-0'
					src='img-2.png'
				></img>
				<img
					className=' absolute w-96 z-20 h-72 left-32 bottom-0'
					src='img-3.png'
				></img>
			</div>
			<div className='flex flex-col justify-end my-40 gap-4 w-full pl-36'>
				<h2 className='font-extrabold text-4xl'>
					Генерация Изображений Через Midjourney
				</h2>
				<p className='text-md'>
					MidJourney - инструмент для создания уникальных изображений. Наши
					алгоритмы помогут вам воплотить в жизнь вашу идею. Начните
					генерировать изображения с MidJourney прямо сейчас! Кликните на кнопку
					ниже, чтобы начать творить.
				</p>
				<Button className='w-44 text-white'>Попробовать Midjourney</Button>
			</div>
		</div>
	)
}

export default MidJourney
