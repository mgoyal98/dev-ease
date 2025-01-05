'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { ColorModes, StorageKeys } from '@/common/enums';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedSidebarOpen = localStorage.getItem(StorageKeys.SidebarOpen);
    setIsSidebarOpen(
      savedSidebarOpen?.length ? savedSidebarOpen === 'true' : true
    );

    // Check the user's preference from local storage
    const savedTheme = localStorage.getItem(StorageKeys.ColorMode);
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === ColorModes.Dark);
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply or remove the dark mode class
    if (isDarkMode) {
      document.body.classList.add(ColorModes.Dark);
      localStorage.setItem(StorageKeys.ColorMode, ColorModes.Dark);
    } else {
      document.body.classList.remove(ColorModes.Dark);
      localStorage.setItem(StorageKeys.ColorMode, ColorModes.Light);
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem(StorageKeys.SidebarOpen, isSidebarOpen.toString());
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className='w-full flex'>
      <Sidebar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <div className='flex-1 flex-col overflow-x-hidden'>
        <Header
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        />
        {children}
      </div>
    </div>
  );
}
