'use strict';

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
  for (let i=0; i < items.length; i++) {
    if (idNum === items[i].id) {
      return items[i];
    }
  }
}