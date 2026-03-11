import { RESOURCE_KEYS } from "@/constants/resources";
import NavEnhancer from "@/ui/header/NavEnhancer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center gap-y-4 px-6 py-5 bg-black border-b-2 border-b-neutral-600 sticky top-0 z-1 shadow-[0_20px_25px_-10px_rgba(0,0,0,0.25)]">
      <Link href="/" className="text-2xl">{t("title")}</Link>
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
        {RESOURCE_KEYS.map(section => {
          return (
            <Link
              key={section} href={`/${section}`}
              className="text-neutral-300 uppercase font-bold hover:text-white [&.active]:text-amber-300"
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
