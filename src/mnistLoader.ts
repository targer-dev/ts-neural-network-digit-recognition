import { DataSet } from './types';

// TODO
export const load_data_wrapper = () => {
  const [training_data, validation_data, test_data]: [DataSet, DataSet, DataSet] = [[], [], []];
  return [training_data, validation_data, test_data] as const;
};
