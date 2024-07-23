import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Globe } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
const LangToggle = () => {
	const [language, setLanguage] = useState('Ru')
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className='flex gap-2 bg-transparent text-white hover:text-blue-700 hover:bg-transparent'>
					<Globe className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
					<span className='font-bold'>{language}</span>
					<ChevronDown className='mt-1' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='min-w-16'
				align='center'
			>
				<DropdownMenuItem
					className='justify-center font-bold'
					onClick={() => setLanguage('Ru')}
				>
					Ru
				</DropdownMenuItem>
				<DropdownMenuItem
					className='justify-center font-bold'
					onClick={() => setLanguage('En')}
				>
					En
				</DropdownMenuItem>
				<DropdownMenuItem
					className='justify-center font-bold'
					onClick={() => setLanguage('Es')}
				>
					Es
				</DropdownMenuItem>
				<DropdownMenuItem
					className='justify-center font-bold'
					onClick={() => setLanguage('Fr')}
				>
					Fr
				</DropdownMenuItem>
				<DropdownMenuItem
					className='justify-center font-bold'
					onClick={() => setLanguage('Pt')}
				>
					Pt
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LangToggle
