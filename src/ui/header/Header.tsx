import { RESOURCE_KEYS } from "@/constants/resources";
import NavEnhancer from "@/ui/header/NavEnhancer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex flex-col min-[58rem]:flex-row justify-between items-center gap-y-5 px-6 py-4 bg-black border-b-2 border-b-neutral-600 sticky top-0 z-1 shadow-[0_20px_25px_-10px_rgba(0,0,0,0.25)]">
      <Link href="/" className="text-2xl text-white">{t("title")}</Link>
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
        {RESOURCE_KEYS.map(section => {
          return (
            <Link
              key={section} href={`/${section}`}
              className="uppercase font-medium text-neutral-300 hover:text-neutral-100 [&.active]:text-white glow-line-bottom"
            >
              {section}
            </Link>
          );
        })}
        <NavEnhancer />
      </nav>
    </header>
  );
};
