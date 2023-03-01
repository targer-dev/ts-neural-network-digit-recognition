import { load_data_wrapper } from './mnistLoader';
import { Network } from './network';

const net = new Network([784, 30, 10]);

const [training_data, validation_data, test_data] = load_data_wrapper();

net.SGD(training_data, 30, 10, 3, test_data);

console.log(net);
