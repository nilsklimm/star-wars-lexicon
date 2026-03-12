import ButtonLink from "@/ui/ButtonLink";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("ErrorPage");
  return (
    <div className="text-center pt-30">
      <h1 className="text-4xl font-bold">{t("404.title")}</h1>
      <p className="mt-3">{t("404.description")}</p>
      <ButtonLink href="/" className="inline-block mt-6">
        {t("backHome")}
      </ButtonLink>
    </div>
  );
}
