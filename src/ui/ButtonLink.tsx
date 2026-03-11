import Link, { LinkProps } from "next/link";

export default function ButtonLink({
  disabled = false,
  children,
  href,
  ...props
}: Readonly<{ disabled?: boolean, children: React.ReactNode }> & LinkProps) {
  return (
    <Link
      {...props}
      href={disabled ? "#" : href}
      aria-disabled={disabled}
      className={`
        px-4 py-2 rounded-full text-black bg-amber-300 hover:bg-amber-400 select-none
        ${disabled ? "bg-neutral-500 pointer-events-none opacity-50" : ""}
      `}>{children}</Link>
  );
};
