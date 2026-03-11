import { RESOURCE_KEYS, RESOURCE_SCHEMAS, ResourceKeyType } from "@/constants/resources";
import { formatLabel } from "@/lib/formatLabel";
import { ResourceItemType } from "@/types/resources";

export default function ResourceTable({ resource, results }: {
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
            <article key={`row-${index}`} className="not-first-of-type:pt-6 not-first-of-type:border-t">
              <h2 className="text-xl font-bold mt-0 mb-4">{row[schema.name]}</h2>
              <dl className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-fr gap-x-6 gap-y-4">
                {schema.props
                  .filter(key => key !== schema.name && key in row)
                  .map(key => (
                    <div className="min-w-32 max-w-64" key={key}>
                      <dl className="font-bold capitalize">{formatLabel(key)}</dl>
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
