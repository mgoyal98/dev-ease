export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white rounded-md border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700'>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-neutral-700'>
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className='font-semibold'>{children}</h2>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className='p-5'>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-4 py-3 border-t border-gray-200 dark:border-neutral-700 flex justify-end items-center'>
      {children}
    </div>
  );
}

export function CardActions({ children }: { children: React.ReactNode }) {
  return <div className='flex items-center gap-3'>{children}</div>;
}

export function CardActionButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className='flex text-sm items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors duration-150 ease-in-out'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
