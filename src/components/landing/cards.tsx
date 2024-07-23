import { cards } from '@/constants/cards'

const Cards = () => {
	return (
		<div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{cards.map((card, index) => (
					<div
						key={index}
						className='bg-[rgba(18,24,37,1)] backdrop-blur-lg bg-radial-gradient h-64 w-[410px] py-7 px-6 rounded-lg flex flex-col gap-4 border border-form'
					>
						<h3 className='text-xl font-bold'>{card.title}</h3>
						<p className='text-md h-full '>{card.body}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Cards
