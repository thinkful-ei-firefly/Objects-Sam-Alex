'use strict';

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};
  
// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
  
const expectedKeys = ['id', 'name', 'age', 'city'];
  
function validateKeys(object, expectedKeys) {
  // your code goes here
  const object1 = Object.keys(object);
  if (object1.length !== expectedKeys.length) {
    return false;
  } 
  for (let i = 0; i < expectedKeys.length; i++) {
    if (!object1.includes(expectedKeys[i]))
      return false;
  }
  return true;
}