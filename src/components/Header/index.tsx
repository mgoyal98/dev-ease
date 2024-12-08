'use client';

import { useRouter, usePathname } from 'next/navigation';
import HeaderIconButton from './icon-button';
import { getNavItemById } from '@/common/utils/nav.util';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
  isDarkMode,
  onToggleDarkMode,
}: {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}) {
  const router = useRouter();
  const pathName = usePathname();

  const buyMeCofeeOnClick = (name: string) => {
    sendGAEvent('event', 'buy_me_coffee_click', {
      label: name,
      current_path: pathName,
    });
  };

  return (
    <div className='bg-white flex h-14 border-b px-4 py-2 items-center justify-between dark:bg-backgroundDark dark:border-zinc-800'>
      <div className='flex items-center gap-2'>
        <HeaderIconButton
          name='toggle-sidebar'
          icon={isSidebarOpen ? 'fa-outdent' : 'fa-indent'}
          onClick={onToggleSidebar}
        />
        <HeaderIconButton
          name='home'
          icon='fa-home'
          onClick={() => router.push('/')}
        />

        {/* TODO: Add search */}
        {/* <div className='flex items-center gap-2 bg-slate-100 dark:bg-zinc-700 h-full px-2 py-1 rounded-md'>
          <i className='far fa-fw fa-search'></i>
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent outline-none hidden sm:block'
          />
        </div> */}
      </div>
      <div className='flex items-center gap-2'>
        <HeaderIconButton
          name='github'
          icon={getNavItemById('github')?.icon || ''}
          href={getNavItemById('github')?.externalLink || ''}
          target='_blank'
          type='link'
        />
        <HeaderIconButton
          name='linkedin'
          icon={getNavItemById('linkedin')?.icon || ''}
          href={getNavItemById('linkedin')?.externalLink || ''}
          target='_blank'
          type='link'
        />
        <HeaderIconButton
          name='about'
          icon={getNavItemById('about')?.icon || ''}
          type='link'
          href={getNavItemById('about')?.route || '/'}
        />
        <HeaderIconButton
          name='toggle-dark-mode'
          icon={isDarkMode ? 'fa-lightbulb-on' : 'fa-moon'}
          onClick={onToggleDarkMode}
        />

        <Link
          href={getNavItemById('buy-me-coffee')?.externalLink || ''}
          onClick={() => buyMeCofeeOnClick('Buy Me a Coffee')}
          target='_blank'
          className='p-2 rounded-md h-9 font-medium flex items-center justify-center gap-1.5 transition-all duration-200 bg-slate-100 dark:bg-zinc-700 hover:bg-slate-200 dark:hover:bg-zinc-600'
        >
          <i className='fad fa-fw fa-mug-hot' />
          <span className='hidden md:block'>Buy Me a Coffee</span>
        </Link>
      </div>
    </div>
  );
}
