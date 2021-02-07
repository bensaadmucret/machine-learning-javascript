const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item =>({
input: item.age,
output: item.favoriteFruit
}));

network.train(trainingData,{
iterations: 2000,
errorThresh: 0.011
});

const output = network.run(29);
console.log(output);