import BackButton from "@/components/resources/BackButton";
import { RESOURCE_KEYS, RESOURCE_SCHEMAS, ResourceKeyType } from "@/constants/resources";
import { JSONFetcher } from "@/lib/fetcher";
import { getResourceDetails } from "@/lib/swapiUrls";
import Card from "@/ui/Card";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    resource: ResourceKeyType;
    uid: string;
  }>
}) {
  const t = await getTranslations("Header");
  const { resource, uid } = await params;

  const data = await JSONFetcher(getResourceDetails(resource, uid ));
  const schema = RESOURCE_SCHEMAS[resource];
  const name = data[schema.name];

  if (!name) return t("title");

  return {
    title: `${name} - ${t("title")}`
  };
};

export default async function ResourceDetailsPage({
  params,
}: {
  params: Promise<{
    resource: ResourceKeyType;
    uid: string;
  }>
}) {
  const { resource, uid } = await params;

  if (!RESOURCE_KEYS.includes(resource)) {
    notFound();
  }

  const data = await JSONFetcher(getResourceDetails(resource, uid ));
  const schema = RESOURCE_SCHEMAS[resource];
  const name = data[schema.name];

  if (!name) return notFound();

  return (
    <>
      <h1 className="mb-4 text-3xl">{name}</h1>
      <Card>
        <p className="mb-6">&#128679; Under construction...</p>
        <BackButton resource={resource} />
      </Card>
    </>
  );
}
