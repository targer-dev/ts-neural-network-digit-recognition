/**
 * multi dimensional vector
 * by default it is a column vector
 * NOTE: due to big variations in shapes, generics are used just to keep metainfo about shape
 */
export type NDArray<Shape extends number[] = [number, 1]> = number[][];

/**
 * NDArray to represent digit
 * e.g. 5 = [[0], [0], [0], [0], [0], [1], [0], [0], [0], [0]]
 * same as transposed vector (0, 0, 0, 0, 0, 1, 0, 0, 0, 0)
 */
export type VectorizedDigit = NDArray<[10, 1]>;

/**
 * tuple of NDArrays
 * where first item is pixel data containing float numbers from 0 to 1
 * and second item represents label of image as a correct answer for image recognition
 */
export type LabeledImageTuple = [NDArray, VectorizedDigit];

export type DataSet = LabeledImageTuple[];
