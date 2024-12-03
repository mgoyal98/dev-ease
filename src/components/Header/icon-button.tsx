export default function HeaderIconButton({
  icon,
  onClick,
}: {
  icon: string;
  onClick?: () => void;
}) {
  return (
    <button
      className='p-2 rounded-md h-9 w-9 flex items-center justify-center transition-all duration-200 hover:bg-slate-100 dark:hover:bg-zinc-700'
      onClick={onClick}
    >
      <i className={`far fa-fw ${icon}`}></i>
    </button>
  );
}
