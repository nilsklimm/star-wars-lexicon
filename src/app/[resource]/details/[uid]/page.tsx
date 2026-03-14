import BackButton from "@/components/resources/BackButton";
import { RESOURCE_SCHEMAS } from "@/constants/resources";
import { isValidResource } from "@/lib/checkResourceType";
import { JSONFetcher } from "@/lib/fetcher";
import { getResourceDetails } from "@/lib/swapiUrls";
import { ResourceKeyType } from "@/types/resources";
import Card from "@/ui/Card";
import DefinitionList from "@/ui/DefinitionList"; // Import the DefinitionList component
import startCase from "lodash.startcase";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    resource: string;
    uid: string;
  }>
}) {
  const t = await getTranslations("Header");
  const { resource, uid } = await params;

  if (!isValidResource(resource)) return null;

  const data = await JSONFetcher(getResourceDetails(resource, uid));
  const schema = RESOURCE_SCHEMAS[resource as ResourceKeyType];
  const name = data[schema.name];

  if (!name) return null;

  return {
    title: `${name} - ${t("title")}`,
  };
};

export default async function ResourceDetailsPage({
  params,
}: {
  params: Promise<{
    resource: string;
    uid: string;
  }>
}) {
  const { resource, uid } = await params;

  if (!isValidResource(resource)) notFound();

  const data = await JSONFetcher(getResourceDetails(resource, uid));
  const schema = RESOURCE_SCHEMAS[resource as ResourceKeyType];
  const name = data[schema.name];

  if (!name) return notFound();

  const items = schema.attrs
    .filter(key => key in data)
    .map(key => ({
      label: startCase(key),
      value: data[key],
    }));

  const details = schema.texts
    ?.filter(key => key in data)
    .map(key => ({
      label: startCase(key),
      value: data[key],
    }));

  return (
    <>
      <h1 className="mb-4 text-3xl">{name}</h1>
      <Card className="flex flex-col gap-6">
        <DefinitionList items={items} />
        {details && details.map(detail =>
          <article key={detail.label}>
            <h3 className="mb-1 text-lg font-medium">{detail.label}</h3>
            <p>{detail.value}</p>
          </article>,
        )}

        <BackButton href={`/${resource}`} className="self-start" />
      </Card>
    </>
  );
}
