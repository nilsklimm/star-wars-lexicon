export type ResourceItemType = {
  url: string;
  [key: string]: string | string[];
};

export type ResourceListType = {
  count: number;
  next?: string;
  previous?: string;
  results: ResourceItemType[];
};

export type SerializedResourcesType = {
  columns: string[];
  data: string[];
  furtherResources: Record<string, string[]>;
};


