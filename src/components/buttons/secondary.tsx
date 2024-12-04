interface SecondaryButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function SecondaryButton({
  children,
  className,
  disabled,
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      className={`px-4 py-1.5 rounded-md bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 transition-colors duration-150 ease-in-out ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
