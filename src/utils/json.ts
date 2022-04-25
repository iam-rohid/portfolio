export function parseJson<T>(json: any): T {
  return JSON.parse(JSON.stringify(json)) as T;
}
