const Footer = () => {
	return (
		<footer className='flex h-[27.75rem] z-10 text-xs bottom-0 px-80 py-16 bg-footer border-t-header gap-24'>
			<div className='flex w-[247px] items-start flex-col gap-5 justify-start'>
				<a
					className='font-extrabold font- text-2xl flex items-center gap-2 cursor-pointer hover:opacity-80 transition'
					href='/'
				>
					<span>Bot</span>
					<span className='bg-logo px-1 rounded-md'>hub</span>
				</a>
				<div className='flex flex-col gap-3'>
					<span>ООО "Ботхаб" ОГРН 1236300016259</span>
					<span>@BotHub 2023</span>
					<span>Пользовательское соглашение</span>
					<img
						src='/alri.png'
						className='w-20'
					></img>
				</div>
			</div>
			<div className='grid w-full grid-cols-1 lg:grid-cols-4 gap-12 justify-around'>
				<div className='flex flex-col gap-5'>
					<span className='opacity-50'>Информация</span>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Главная страница
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Тарифы
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Контакты
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Наши возможности
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Модели нейросетей
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						О Нас
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Для инвесторов
					</a>
				</div>
				<div className='flex flex-col gap-5'>
					<span className='opacity-50'>Наши продукты</span>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						ChatGpt для бизнеса
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Агрегатор нейросетей
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						ChatGpt в Telegram
					</a>
				</div>
				<div className='flex flex-col gap-5'>
					<span className='opacity-50'>Ссылки</span>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Сообщество в телеграм
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Телеграм бот
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						email@bothub.chat
					</a>
				</div>
				<div className='flex flex-col gap-5'>
					<span className='opacity-50'>Блог</span>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Наш блог
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Habr
					</a>
					<a
						href='#'
						className='hover:text-blue-700 transition'
					>
						Телеграм
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
