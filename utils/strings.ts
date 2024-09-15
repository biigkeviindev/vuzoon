export const getFirstLetter = (input: string): string => {
  if (input?.length === 0) {
    return "";
  }
  return input?.charAt(0)?.toUpperCase();
};
