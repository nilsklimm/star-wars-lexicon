import { RESOURCE_SCHEMAS } from "@/constants/resources";
import { extractIdFromUrl } from "@/lib/extractIdFromUrl";
import { ResourceItemType, ResourceKeyType } from "@/types/resources";
import DefinitionList from "@/ui/DefinitionList";
import startCase from "lodash.startcase";
import Link from "next/link";

export default function ResourceList({ resource, results }: {
  resource: ResourceKeyType;
  results: ResourceItemType[];
}) {
  const schema = RESOURCE_SCHEMAS[resource];

  if (results.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 min-h-64">
      {results
        .filter((row: ResourceItemType) => schema.name in row)
        .map((row: ResourceItemType, index: number) => {
          const items = schema.attrs
            .filter(key => key !== schema.name && key in row)
            .map(key => ({
              label: startCase(key),
              value: row[key],
            }));

          return (
            <section
              className="
                flex flex-col gap-5
                not-first-of-type:pt-6
                not-first-of-type:border-t
                not-first-of-type:border-neutral-500
              "
              key={`row-${index}`}
            >
              <h2 className="glow-line-left text-2xl">
                <Link
                  href={`/${resource}/details/${extractIdFromUrl(row.url)}`}
                  className="text-neutral-300 hover:text-white">
                  {row[schema.name]}
                </Link>
              </h2>
              <DefinitionList items={items} />
            </section>
          );
        })
      }
    </div>
  );
};


