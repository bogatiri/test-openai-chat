import { ThemeProvider } from '@/components/theme-provider'
import Footer from './components/landing/footer'
import Header from './components/landing/header'
import Main from './components/landing/main'
const App = () => {
	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'
		>
			<div className='flex flex-col h-full'>
				<Header />
				<Main />
				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default App
