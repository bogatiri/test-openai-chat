/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from '@/components/theme-provider'
import { useEffect, useState } from 'react'
import Footer from './components/landing/footer'
import Header from './components/landing/header'
import Main from './components/landing/main'
import Menu from './components/landing/menu'
const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleResize = () => {
		if (isOpen) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [isOpen])

	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'
		>
			<div className='flex flex-col h-full'>
				<Header
					setIsOpen={setIsOpen}
					isOpen={isOpen}
				/>
				{isOpen && (
					<div className='relative lg:hidden top-20 px-10 py-11 animate-menuDown'>
						<Menu className='flex-col ' />
					</div>
				)}
				<Main />
				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default App
