import BackButton from "@/components/resources/BackButton";
import { RESOURCE_KEYS, RESOURCE_SCHEMAS, ResourceKeyType } from "@/constants/resources";
import { getResourceDetails } from "@/lib/swapiUrls";
import Card from "@/ui/Card";
import capitalize from "lodash.capitalize";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ resource: string, uid: string }>;

}) {
  const { resource } = await params;

  return {
    title: `Star Wars Lexicon - ${capitalize(resource)}`
  };
};

export default async function ResourceListPage({
  params,
}: {
  params: Promise<{ resource: string, uid: string }>;
}) {
  const { resource, uid } = await params;

  if (!RESOURCE_KEYS.includes(resource as ResourceKeyType)) {
    notFound();
  }

  const schema = RESOURCE_SCHEMAS[resource as ResourceKeyType];
  const response = await fetch(getResourceDetails(resource, uid ));

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  return (
    <>
      <h1 className="mb-4 text-3xl">{data[schema.name]}</h1>
      <Card>
        <p className="mb-6">&#128679; Under construction...</p>
        <BackButton resource={resource} />
      </Card>
    </>
  );
}
