import { cards } from '@/constants/cards'

const Cards = () => {
	return (
		<div>
			<div className='w-full px-10 sm:px-20 md:px-20 lg:px-20 xl:px-32 2xl:px-40 3xl:px-60 4xl:px-80 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
				{cards.map((card, index) => (
					<div
						key={index}
						className='bg-[rgba(18,24,37,1)] backdrop-blur-lg bg-radial-gradient  lg:h-56 max-w-full overflow-hidden box-content py-7 px-6 rounded-lg flex flex-col gap-4 border border-form'
					>
						<h3 className='text-md lg:text-xl font-bold'>{card.title}</h3>
						<p className='text-xs lg:text-md h-full'>{card.body}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Cards
