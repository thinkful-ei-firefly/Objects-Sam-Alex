'use strict';

const translator = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

const decode = message => {
  const arr = message.split(' ');
  
  const answer = arr.map(word => {
    // if (word[0] === 'a') {
    //   return word[2];
    // } else if (word[0] === 'b') {
    //   return word[3];
    // } else if (word[0] === 'c') {
    //   return word[4];
    // } else if (word[0] === 'd') {
    //   return word[5];
    // } else {
    //   return ' ';
    // }
    let newVar = translator[word[0]];
    if (!newVar) {
      return ' ';
    }
    return word[newVar-1];
  });
  return answer.join('');
};

console.log(decode('craft block argon meter bells brown croon droop'));
