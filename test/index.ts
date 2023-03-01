import { sigmoid } from '../src/network';
import { zip } from '../src/utils';

// test sigmoid works as expected
const testSigmoid = (z: number) => console.log(z, 'sigma =', sigmoid(z));

testSigmoid(-5e3);
testSigmoid(-10);
testSigmoid(-0.5212);
testSigmoid(0);
testSigmoid(0.1);
testSigmoid(0.2);
testSigmoid(0.5212);
testSigmoid(10);
testSigmoid(5e3);

// test python stdlib analogues
{
  const arr = [784, 30, 10, 25];
  // expected zip [ [ 784, 30 ], [ 30, 10 ], [ 10, 25 ] ]
  console.log('zip', zip(arr.slice(0, -1), arr.slice(1)));
}
