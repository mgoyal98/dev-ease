'use client';

import { useRouter } from 'next/navigation';
import HeaderIconButton from './icon-button';
import { appConfig } from '@/common/constants';
import { getNavItemById } from '@/common/utils/nav.util';
import Link from 'next/link';

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
  return (
    <div className='bg-white flex h-14 border-b px-4 py-2 items-center justify-between dark:bg-backgroundDark dark:border-zinc-800'>
      <div className='flex items-center gap-2'>
        <HeaderIconButton
          icon={isSidebarOpen ? 'fa-outdent' : 'fa-indent'}
          onClick={onToggleSidebar}
        />
        <HeaderIconButton icon='fa-home' onClick={() => router.push('/')} />

        <div className='flex items-center gap-2 bg-slate-100 dark:bg-zinc-700 h-full px-2 py-1  rounded-md'>
          <i className='far fa-fw fa-search'></i>
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent outline-none'
          />
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <HeaderIconButton
          icon={getNavItemById('github')?.icon || ''}
          href={getNavItemById('github')?.externalLink || ''}
          target='_blank'
          type='link'
        />
        <HeaderIconButton
          icon={getNavItemById('linkedin')?.icon || ''}
          href={getNavItemById('linkedin')?.externalLink || ''}
          target='_blank'
          type='link'
        />
        <HeaderIconButton
          icon={getNavItemById('about')?.icon || ''}
          onClick={() => router.push(getNavItemById('about')?.route || '/')}
        />
        <HeaderIconButton
          icon={isDarkMode ? 'fa-lightbulb-on' : 'fa-moon'}
          onClick={onToggleDarkMode}
        />

        <Link
          href={getNavItemById('buy-me-coffee')?.externalLink || ''}
          target='_blank'
          className='p-2 rounded-md h-9 font-medium flex items-center justify-center gap-1.5 transition-all duration-200 bg-slate-100 dark:bg-zinc-700 hover:bg-slate-200 dark:hover:bg-zinc-600'
        >
          <i className='fad fa-fw fa-mug-hot' /> Buy Me a Coffee
        </Link>
      </div>
    </div>
  );
}
