import ResourceLoader from "@/components/resources/ResourceLoader";
import { RESOURCE_KEYS, ResourceKeyType } from "@/constants/resources";
import { notFound } from "next/navigation";

export default async function ResourceListPage({
  params,
}: {
  params: Promise<{ resource: string }>
}) {
  const { resource } = await params;

  if (!RESOURCE_KEYS.includes(resource as ResourceKeyType)) {
    notFound();
  }

  return (
    <>
      <h1 className="mb-4 text-3xl capitalize">{resource}</h1>
      <ResourceLoader resource={resource as ResourceKeyType} />
    </>
  );

}
