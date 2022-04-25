export const findMatch = (query: string, text: string) => {
  const searchQueries = query.toLocaleLowerCase().split(" ");
  return !searchQueries
    .map((query) =>
      text
        .toLocaleLowerCase()
        .split(" ")
        .find((item) => !!item.startsWith(query))
    )
    .includes(undefined);
};
