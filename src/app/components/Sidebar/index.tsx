import Link from 'next/link';

function SidebarItemHeading({ label }: { label: string }) {
  return (
    <div className='flex items-center px-5 text-zinc-500'>
      <h6 className='text-sm font-medium'>{label}</h6>
    </div>
  );
}

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <nav
      className={`shrink-0 w-64 border-r ${isSidebarOpen ? 'block' : 'hidden'}`}
    >
      <div
        className={`bg-white dark:bg-backgroundDark dark:border-zinc-800 flex shrink-0 flex-col w-64 h-svh border-r fixed left-0 top-0 `}
      >
        {/* Logo */}
        <div className='flex items-center h-14 px-6 py-2'>
          <i className='far fa-code text-2xl mr-2'></i>
          <span className='text-xl font-bold'>
            Dev<span className='text-emerald-500'>Ease</span>
          </span>
        </div>

        {/* Items Holder */}
        <div className='flex-1 flex flex-col mt-4'>
          {/* Items */}
          <SidebarItemHeading label='Favorites' />
        </div>

        {/* Footer */}
        <div className='flex items-center justify-center h-14 px-6 py-2'>
          <span className='text-sm text-zinc-500'>
            &copy; {new Date().getFullYear()}{' '}
            <Link
              href='https://madhur.dev'
              className='text-emerald-500 font-medium hover:text-emerald-600 transition-colors duration-200'
              target='_blank'
            >
              Madhur Goyal
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
