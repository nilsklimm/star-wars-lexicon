import { useTranslations } from "next-intl";

export default function RichTranslation({
  namespace,
  message,
}: Readonly<{
  namespace: string,
  message: string,
}>) {
  const t = useTranslations(namespace);

  return t.rich(message, {
    em: chunk => <span className="text-amber-300">{chunk}</span>,
    url: chunk => <a href={chunk as string} target="_blank" className="underline">{chunk}</a>,
  });
};
