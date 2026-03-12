import { RESOURCE_KEYS, RESOURCE_SCHEMAS, ResourceKeyType } from "@/constants/resources";
import { extractIdFromUrl } from "@/lib/extractIdFromUrl";
import { ResourceItemType } from "@/types/resources";
import startCase from "lodash.startcase";
import Link from "next/link";

export default function ResourceList({ resource, results }: {
  resource: ResourceKeyType;
  results: ResourceItemType[];
}) {
  if (!RESOURCE_KEYS.includes(resource)) return null;
  const schema = RESOURCE_SCHEMAS[resource];

  if (results.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 min-h-64">
      {results
        .filter((row: ResourceItemType) => schema.name in row)
        .map((row: ResourceItemType, index: number) => {
          return (
            <article
              className="
                flex flex-col gap-5
                not-first-of-type:pt-6
                not-first-of-type:border-t
                not-first-of-type:border-neutral-500
              "
              key={`row-${index}`}
            >
              <Link
                href={`/${resource}/details/${extractIdFromUrl(row.url)}`}
                className="
                  glow-line-left text-2xl self-start
                  text-neutral-300 hover:text-white
                "
              >
                {row[schema.name]}
              </Link>
              <dl
                className="
                  grid grid-cols-2
                  sm:grid-cols-3
                  md:grid-cols-4 gap-5
                ">
                {schema.props
                  .filter(key => key !== schema.name && key in row)
                  .map(key => (
                    <div className="min-w-32 max-w-64" key={key}>
                      <dl className="mb-1 text-lg font-medium">{startCase(key)}</dl>
                      <dt>{row[key]}</dt>
                    </div>
                  ))}
              </dl>
            </article>
          );
        }
        )}
    </div>
  );

};
