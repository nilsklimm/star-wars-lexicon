"use client";

import ButtonLink from "@/ui/ButtonLink";
import { useTranslations } from "next-intl";

export default function BackButton({
  resource,
  ...props
}: Readonly<{ resource: string }>) {
  const t = useTranslations("Navigation");
  return (
    <ButtonLink
      {...props}
      href={`/${resource}`}
      onClick={(e: React.MouseEvent | React.KeyboardEvent)=> {
        e.preventDefault();
        history.back();
      }}
    >
      {t("back")}
    </ButtonLink>
  );
};
