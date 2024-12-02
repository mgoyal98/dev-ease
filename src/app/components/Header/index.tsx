'use client';

import { useRouter } from 'next/navigation';
import HeaderIconButton from './icon-button';
import { appRoutes } from '@/app/common/constants';

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
        <HeaderIconButton
          icon='fa-home'
          onClick={() => router.push(appRoutes.home)}
        />

        <div className='flex items-center gap-2 bg-slate-100 dark:bg-zinc-700 h-full p-2 rounded-md'>
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
          icon={isDarkMode ? 'fa-lightbulb-on' : 'fa-moon'}
          onClick={onToggleDarkMode}
        />
      </div>
    </div>
  );
}
