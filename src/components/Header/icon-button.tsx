import Link from 'next/link';

const buttonClassName =
  'p-2 rounded-md h-9 w-9 flex items-center justify-center transition-all duration-200 hover:bg-slate-100 dark:hover:bg-zinc-700';

export default function HeaderIconButton({
  icon,
  onClick,
  type = 'button',
  href,
  target,
}: {
  type?: 'button' | 'link';
  icon: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}) {
  return (
    <>
      {type === 'button' ? (
        <button className={buttonClassName} onClick={onClick}>
          <i className={`far fa-fw ${icon}`}></i>
        </button>
      ) : (
        <Link className={buttonClassName} href={href || '#'} target={target}>
          <i className={`far fa-fw ${icon}`}></i>
        </Link>
      )}
    </>
  );
}
