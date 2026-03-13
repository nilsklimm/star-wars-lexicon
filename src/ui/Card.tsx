const clipPath = "[clip-path:polygon(0_0,100%_0,100%_100%,94%_100%,calc(94%-24px)_calc(100%-16px),calc(74%+24px)_calc(100%-16px),74%_100%,0_100%)]";

export default function Card({
  children,
  className,
}: Readonly<{
  children: React.ReactNode,
  className?: string,
}>) {
  return (
    <div
      className={`
        relative p-6 pb-10 min-h-70
        bg-neutral-700 rounded-lg
        inset-shadow-xs inset-shadow-neutral-600
        ${clipPath} ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
};
