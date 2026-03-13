"use client";

import ButtonLink from "@/ui/ButtonLink";
import { useTranslations } from "next-intl";
import { LinkProps } from "next/link";

export default function BackButton(props: Readonly<{
  className?: string;
}> & LinkProps) {
  const t = useTranslations("Navigation");
  return (
    <ButtonLink
      {...props}
      onClick={(e: React.MouseEvent | React.KeyboardEvent)=> {
        e.preventDefault();
        history.back();
      }}
    >
      {t("back")}
    </ButtonLink>
  );
};
