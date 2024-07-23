import { Button } from '@/components/ui/button'

import { ChevronDown } from 'lucide-react'
import LangToggle from '../lang-toggle'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'
// import { ModeToggle } from '../mode-toggle'
const Header = () => {
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
					<nav className='flex w-full gap-4'>
						<DropdownMenu>
							<DropdownMenuTrigger className='hover:text-blue-700 flex items-center gap-1 cursor-pointer'>
								<span>Продукты</span>
								<ChevronDown className='mt-1' />
							</DropdownMenuTrigger>
							<DropdownMenuContent className='flex'>
								<DropdownMenuItem className='flex-col'>
									<span>Telegram Bot</span>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quod corporis suscipit
									</p>
								</DropdownMenuItem>
								<DropdownMenuItem className='flex-col'>
									<span>Telegram Bot</span>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quod corporis suscipit
									</p>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<a
							className='hover:text-blue-700 cursor-pointer'
							href='#'
						>
							Пакеты
						</a>
						<a
							className='hover:text-blue-700 cursor-pointer'
							href='#'
						>
							API
						</a>
						<a
							className='hover:text-blue-700 cursor-pointer'
							href='#'
						>
							Блог
						</a>
					</nav>
				</div>
				{/* <ModeToggle/> */}
				<div className='flex items-center justify-end w-56 gap-4 bg-red text-white'>
					<LangToggle />
					<Button>Authorization</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
