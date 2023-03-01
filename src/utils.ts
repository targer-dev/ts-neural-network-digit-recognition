// TODO
/**
 * similar to https://docs.python.org/3.3/library/functions.html#zip
 */
export const zip = (a: number[], b: number[]): [number, number][] => {
  const maxLen = Math.max(a.length, b.length);
  const res: [number, number][] = [];
  for (let i = 0; i < maxLen; i++) {
    res.push([a[i], b[i]]);
  }
  return res;
};
