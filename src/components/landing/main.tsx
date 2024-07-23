import Cards from './cards'
import MidJourney from './mid-journey'
import TitleBlock from './title-block'

const Main = () => {
	return (
		<main className='relative h-full mt-20 flex items-center flex-col justify-center flex-1 gap-20'>
			<div className='w-full  bg-grid-size bg-grid pb-10'>
				<TitleBlock />
			</div>
			<h2 className='text-4xl font-bold'>Возможности ChatGpt</h2>
			<Cards />
			<MidJourney />
		</main>
	)
}

export default Main
