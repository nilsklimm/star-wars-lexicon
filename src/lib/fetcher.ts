export const JSONFetcher = (url: string) => fetch(url).then(r => r.json());
