const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item =>(
    {input: item.age, output: item.gender}
   

));

network.train(trainingData,{
iterations: 1500

});

const output = network.run(23);
console.log(output);