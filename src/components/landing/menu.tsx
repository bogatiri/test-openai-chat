/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDown } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'

interface IMenuProps {
	className?: string
}

const Menu = ({ className }: IMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev); 
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	const handleButtonClick = () => {
    if (!isOpen) {
      toggleMenu();
    } else{
			setIsOpen(false)
		}
  };

	return (
		<nav className={`lg:flex flex w-full gap-4 ${className}`}>
			<div className='hover:text-blue-700 flex items-center gap-1 justify-between cursor-pointer'>
				<span>Продукты</span>
				<button ref={buttonRef} onClick={handleButtonClick}>
					<ChevronDown
						className={`mt-1 transition-transform duration-300 ease-out ${isOpen ? 'transform rotate-180' : ''}`}
					/>
				</button>
			</div>
			{isOpen && (
				<div
					ref={menuRef}
					className='lg:absolute top-20 lg:max-w-[600px] lg:border-border lg:border rounded-lg p-4 gap-2 grid  sm:grid-cols-2 bg-muted'
				>
					<div className='flex items-center gap-2'>
						<img
							className='w-10 h-10 bg-purple-400 p-2 rounded-xl'
							src='./Vector1.png'
						></img>
						<div>
							<span className='text-md'>Агрегатор нейросетей BotHub</span>
							<p className='opacity-70 text-xs'>
								ChatGpt на базе 3.5 и 4.0 версии OpenAI
							</p>
						</div>
					</div>
					<div className='flex items-center gap-2'>
						<img
							className='w-10 h-10 bg-purple-400 p-2 rounded-xl'
							src='./Frame.png'
						></img>
						<div>
							<span className='text-md'>Бизнес бот</span>
							<p className='opacity-70 text-xs'>
								ChatGpt для эффективного решения бизнес задач
							</p>
						</div>
					</div>
					<div className='flex items-center gap-2'>
						<img
							className='w-10 h-10 bg-purple-400 p-2 rounded-xl'
							src='./Frame1.png'
						></img>
						<div>
							<span className='text-md'>Telegram Bot</span>
							<p className='opacity-70 text-xs'>
								Удобный бот в Telegram который всегда под рукой
							</p>
						</div>
					</div>
				</div>
			)}
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
			<Button className='md:hidden'>Авторизация</Button>
		</nav>
	)
}

export default Menu
