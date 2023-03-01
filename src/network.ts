import { np } from './numpy';
import { DataSet, NDArray } from './types';
import { zip } from './utils';

export class Network {
  public num_layers: number;
  public biases: NDArray<[number, 1]>[];
  public weights: NDArray<[number, number]>[];

  /**
   * The list ``sizes`` contains the number of neurons in the
   * respective layers of the network.  For example, if the list
   * was [2, 3, 1] then it would be a three-layer network, with the
   * first layer containing 2 neurons, the second layer 3 neurons,
   * and the third layer 1 neuron.  The biases and weights for the
   * network are initialized randomly, using a Gaussian
   * distribution with mean 0, and variance 1.  Note that the first
   * layer is assumed to be an input layer, and by convention we
   * won't set any biases for those neurons, since biases are only
   * ever used in computing the outputs from later layers.
   */
  constructor(public sizes: number[]) {
    this.num_layers = sizes.length;
    this.biases = [];
    const sliceOfBiases = sizes.slice(1);
    for (const y of sliceOfBiases) {
      this.biases.push(np.random.randn(y, 1));
    }
    this.weights = [];
    const zipOfSizes = zip(sizes.slice(0, -1), sizes.slice(1));
    for (const [x, y] of zipOfSizes) {
      this.weights.push(np.random.randn(y, x));
    }
  }

  /**
   * TODO
   * Return a tuple ``(nabla_b, nabla_w)`` representing the
   * gradient for the cost function C_x.  ``nabla_b`` and
   * ``nabla_w`` are layer-by-layer lists of numpy arrays, similar
   * to ``this.biases`` and ``this.weights``.
   */
  backprop() {}

  /**
   * TODO
   * Train the neural network using mini-batch stochastic
   * gradient descent.  The "training_data" is a list of tuples
   * "(x, y)" representing the training inputs and the desired
   * outputs.  The other non-optional parameters are
   * self-explanatory.  If "test_data" is provided then the
   * network will be evaluated against the test data after each
   * epoch, and partial progress printed out.  This is useful for
   * tracking progress, but slows things down substantially.
   */
  SGD(
    training_data: DataSet,
    epochs: number,
    mini_batch_size: number,
    eta: number,
    test_data?: DataSet,
  ) {}
}

/**
 * sigmoid aka logistic function
 */
export const sigmoid = (z: number) => 1.0 / (1.0 + Math.exp(-z));

/**
 * Derivative of the sigmoid function
 */
const sigmoid_prime = (z: number) => sigmoid(z) * (1 - sigmoid(z));
