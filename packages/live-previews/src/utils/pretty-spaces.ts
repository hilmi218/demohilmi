export const prettySpaces = (content: string): string => {
  return content.replace(/ {2,}/g, " ").replace(/\n{2,}/g, "\n");
};
