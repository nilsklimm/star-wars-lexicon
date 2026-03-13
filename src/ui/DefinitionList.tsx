interface DefinitionListItem {
  label: string;
  value: React.ReactNode;
}

export default function DefinitionList({ items }: { items: DefinitionListItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <dl className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {items.map(({ label, value }, index) => (
        <div key={index} className="min-w-32 max-w-64">
          <dt className="mb-1 text-lg font-medium">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
