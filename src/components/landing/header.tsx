import { Button } from '@/components/ui/button'

import { AlignJustify, X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import LangToggle from '../lang-toggle'
import { Separator } from '../ui/separator'
import Menu from './menu'

interface IHeaderProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

const Header = ({ setIsOpen, isOpen }: IHeaderProps) => {
	return (
		<header className='fixed flex w-screen h-20 z-10 px-10 sm:px-20 md:px-20 lg:px-20 xl:32px 2xl:40px 3xl:60px 4xl:px-80 py-5 bg-border-header border-b-header'>
			<div className='w-full flex justify-between h-10'>
				<div className='flex w-[65rem] justify-start text-lg items-center gap-4'>
					<a
						className='font-extrabold font- text-2xl flex items-center gap-2 cursor-pointer hover:opacity-80 transition'
						href='/'
					>
						<span>Bot</span>
						<span className='bg-logo px-1 rounded-md'>hub</span>
					</a>
					<Separator orientation='vertical' />
					<div className='hidden lg:block'>
					<Menu />
					</div>
				</div>
				<div className='flex items-center justify-end w-56 gap-4 bg-red text-white'>
					<LangToggle />
					<Button className='text-white hidden md:block'>Authorization</Button>
					{isOpen ? (
						<Button
							className='lg:hidden text-white p-2'
							onClick={() => setIsOpen(false)}
						>
							<X />
						</Button>
					) : (
						<Button
							className='lg:hidden text-white p-2'
							onClick={() => setIsOpen(true)}
						>
							<AlignJustify />
						</Button>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
