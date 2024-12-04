'use client';

import { appConfig, navCategories } from '@/common/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarItem, SidebarItemHeading } from './sidebar-items';
import { StorageKeys } from '@/common/enums';
import { useEffect, useState } from 'react';
import { getNavItemsByCategory } from '@/common/utils';
import ExternalLink from '@/components/external-link';

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    setCollapsedItems(
      JSON.parse(
        localStorage.getItem(StorageKeys.SidebarCollapsedItems) || '{}'
      )
    );
  }, []);

  const pathname = usePathname();

  const toggleCollapsedItem = (itemId: string) => {
    setCollapsedItems((prev) => {
      const newCollapsedItems = {
        ...prev,
        [itemId]: !prev[itemId],
      };

      localStorage.setItem(
        StorageKeys.SidebarCollapsedItems,
        JSON.stringify(newCollapsedItems)
      );

      return newCollapsedItems;
    });
  };

  return (
    <nav
      className={`shrink-0 w-64 border-r dark:border-zinc-800 bg-white dark:bg-backgroundDark h-screen ${
        isSidebarOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className={`flex shrink-0 flex-col w-64 h-screen fixed left-0 top-0 `}
      >
        {/* Logo */}
        <Link href='/' className='flex items-center h-14 px-6 py-2'>
          <i className='far fa-brackets-curly text-2xl mr-2'></i>
          <span className='text-xl font-bold'>
            {appConfig.firstName}
            <span className='text-emerald-500'>{appConfig.lastName}</span>
          </span>
        </Link>

        {/* Navigation Holder */}
        <div className='flex-1 flex flex-col mt-4 overflow-y-scroll'>
          {/* Navigation */}
          {Object.values(navCategories).map((category, catIndex) => {
            if (!category.visibleOnSidebar) return null; // Skip items not visible on the sidebar

            return (
              <div key={`${category.id}-${catIndex}`} className='w-full'>
                {/* Section Heading */}
                <SidebarItemHeading
                  label={category.name}
                  isOpen={!collapsedItems[category.id]}
                  onClick={() => toggleCollapsedItem(category.id)}
                />

                {/* Sub-links */}
                {!collapsedItems[category.id] && (
                  <>
                    {getNavItemsByCategory(category.id).map(
                      (navItem, navIndex) => {
                        if (!navItem.visibleOnSidebar) return null; // Skip invisible sub-links

                        return (
                          <SidebarItem
                            key={`${navItem.id}-${navIndex}`}
                            label={navItem.name}
                            icon={navItem.icon}
                            active={navItem.route === pathname}
                            route={navItem.route ?? '/'}
                          />
                        );
                      }
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className='flex items-center justify-center h-14 px-6 py-2'>
          <span className='text-sm text-zinc-500'>
            &copy; {new Date().getFullYear()}{' '}
            <ExternalLink href='https://mgoyal.com'>Madhur Goyal</ExternalLink>
          </span>
        </div>
      </div>
    </nav>
  );
}
