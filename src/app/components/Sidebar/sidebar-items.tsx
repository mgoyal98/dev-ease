import Link from 'next/link';

export function SidebarItemHeading({
  label,
  isOpen,
  onClick,
}: {
  label: string;
  isOpen?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className='flex items-center justify-between w-full mt-3 px-5 text-zinc-500 mb-2 hover:text-zinc-600 hover:cursor-pointer transition-all duration-200'
      onClick={onClick}
    >
      <h6 className='text-sm font-medium'>{label}</h6>
      <i
        className={`far fa-fw ${
          isOpen ? 'fa-chevron-down' : 'fa-chevron-right'
        }`}
      ></i>
    </button>
  );
}

export function SidebarItem({
  label,
  icon,
  active,
  route,
}: {
  label: string;
  icon: string;
  active?: boolean;
  route: string;
}) {
  return (
    <Link
      href={route}
      className={`flex items-center w-full  gap-3 pr-4 pl-6 py-3 text-sm hover:bg-emerald-50 dark:hover:bg-zinc-800 border-r-2 border-transparent transition-colors duration-200 ${
        active
          ? 'border-r-emerald-500 bg-emerald-50 dark:bg-zinc-800 text-emerald-500 dark:text-emerald-500'
          : ''
      }`}
    >
      <i className={`far fa-fw ${icon}`}></i>
      {label}
    </Link>
  );
}
