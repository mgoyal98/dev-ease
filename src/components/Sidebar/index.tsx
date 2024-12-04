import { navCategories } from '@/common/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarItem, SidebarItemHeading } from './sidebar-items';
import { StorageKeys } from '@/common/enums';
import { useEffect, useState } from 'react';
import { getNavItemsByCategory } from '@/common/utils';

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
                            route={navItem.route}
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
            <Link
              href='https://mgoyal.com'
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
