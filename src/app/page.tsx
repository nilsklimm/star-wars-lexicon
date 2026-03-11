import Card from "@/ui/Card";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1 className="mb-4 text-3xl">Welcome space traveler</h1>
      <Card>
        <p className="whitespace-pre-wrap">{t.rich("description", {
          em: chunk => <span className="text-amber-300">{chunk}</span>
        })}</p>
      </Card>
    </>
  );
}
