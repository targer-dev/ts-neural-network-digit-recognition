/**
 * This files used to provide needed methods used from python numpy lib
 * https://numpy.org/doc/stable/reference/index.html
 */

import { NDArray } from './types';

export const np = {
  random: {
    /**
     * https://numpy.org/doc/stable/reference/random/generated/numpy.random.rand.html
     */
    randn: <R extends number, C extends number>(rows: R, cols: C): NDArray<[R, C]> => {
      // TODO
      return [];
    },
  },
};
