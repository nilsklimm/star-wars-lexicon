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
    text-neutral-900 bg-amber-300
    font-medium select-none
  `;

  if (disabled) {
    return (
      <span
        aria-disabled={disabled}
        className={`
          ${coreClassName}
          opacity-40 cursor-not-allowed
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
        hover:bg-amber-400
      `}
    >
      {children}
    </Link>
  );
};
