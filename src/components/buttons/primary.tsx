interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  className,
  disabled,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className={`text-white px-4 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-600 transition-colors duration-150 ease-in-out ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
