"use client";

import ResourceList from "@/components/resources/ResourceList";
import { JSONFetcher } from "@/lib/fetcher";
import { getResourceList } from "@/lib/swapiUrls";
import { ResourceKeyType, ResourceListType } from "@/types/resources";
import Card from "@/ui/Card";
import Loader from "@/ui/Loader";
import Pagination from "@/ui/Pagination";
import { notFound, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import useSWR from "swr";

export default function ResourceLoader({ resource }: {
  resource: ResourceKeyType
}) {
  const searchParams = useSearchParams();
  const page = Number(searchParams?.get("page")) || 1;

  const { data, error, isLoading } = useSWR(
    getResourceList(resource, { page }),
    JSONFetcher,
    {
      keepPreviousData: true,
      revalidateOnMount: false,
    },
  );

  const { count, results } = data  || {} as ResourceListType;
  const pageCount = useMemo(() => count > 0 ? Math.ceil(count / 10) : 0, [count]);

  if(error) notFound();

  return (
    <Card className="flex flex-col gap-6">
      {<Loader isLoading={isLoading} />}
      {Array.isArray(results) && results.length > 0 && (
        <>
          <Pagination url={resource} page={page} pageCount={pageCount} />
          <ResourceList resource={resource} results={results} />
          <Pagination url={resource} page={page} pageCount={pageCount} />
        </>
      )}
    </Card>
  );

};
