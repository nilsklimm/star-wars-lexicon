import Link, { LinkProps } from "next/link";

export default function ButtonLink({
  href,
  children,
  disabled = false,
  className = "",
  ...props
}: Readonly<{
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}> & LinkProps) {
  const coreClassName = `
    ${className}
    px-4 py-1.5 rounded-full
    font-medium select-none
    shadow-md shadow-black/30
  `;

  if (disabled) {
    return (
      <span
        aria-disabled={disabled}
        className={`
          ${coreClassName}
          text-neutral-400
          inset-ring-2 inset-ring-neutral-400
          opacity-50 cursor-not-allowed
        `}
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      {...props}
      href={href}
      aria-disabled={disabled}
      className={`
        ${coreClassName}
        text-black
        bg-amber-300 hover:bg-amber-400
      `}
    >
      {children}
    </Link>
  );
};
