// sigmoid aka logistic function
const sigmoid = (z: number) => 1.0 / (1.0 + Math.exp(-z));

// test sigmoid works as expected
const testSigmoid = (z: number) => console.log(z, 'sigma =', sigmoid(z));

testSigmoid(-5e3);
testSigmoid(-10);
testSigmoid(-.5212);
testSigmoid(0);
testSigmoid(0.1);
testSigmoid(0.2);
testSigmoid(.5212);
testSigmoid(10);
testSigmoid(5e3);
