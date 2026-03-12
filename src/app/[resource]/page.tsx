import ResourceLoader from "@/components/resources/ResourceLoader";
import { RESOURCE_KEYS, ResourceKeyType } from "@/constants/resources";
import { JSONFetcher } from "@/lib/fetcher";
import { getResourceList } from "@/lib/swapiUrls";
import capitalize from "lodash.capitalize";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SWRConfig } from "swr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ resource: string, uid: string }>;
}) {
  const { resource } = await params;
  const t = await getTranslations("Header");

  return {
    title: `${capitalize(resource)} - ${t("title")}`
  };
};

export default async function ResourceListPage({
  params,
  searchParams,
}: {
  params: Promise<{ resource: ResourceKeyType }>
  searchParams: Promise<{ page?: string }>
}) {
  const { resource } = await params;
  const page = Number((await searchParams)?.page) || 1;
  const apiURL = getResourceList(resource, { page });

  if (!RESOURCE_KEYS.includes(resource)) {
    notFound();
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [apiURL]: JSONFetcher(apiURL),
        },
      }}
    >
      <h1 className="mb-4 text-3xl capitalize">{resource}</h1>
      <ResourceLoader resource={resource} />
    </SWRConfig>
  );

}
