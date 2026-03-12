import Card from "@/ui/Card";
import RichTranslation from "@/ui/RichTranslation";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-4 text-3xl">Welcome space traveler</h1>
      <Card>
        <p className="whitespace-pre-wrap">
          <RichTranslation namespace="HomePage" message="description" />
        </p>
      </Card>
    </>
  );
};
