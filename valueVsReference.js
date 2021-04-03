//Value vs reference

const name = 'Jagadeesh';
const behaviour = {
  character: 'decent',
  toleranceLevel: 'high',
};

const personSelected = function (nam, beh) {
  nam = 'hari';
  console.log(beh.character);
  beh.character = 'arrogant';
};

personSelected(name, behaviour);

console.log(name, behaviour.character); // Jagadeesh arrogant
