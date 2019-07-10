'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

// function findOne(arr, query) {
//   const keys = Object.keys(query);
//   console.log(keys);
//   console.log(query[keys]);
//   console.log(arr[0][keys]);
//   console.log(HEROES[0].id);


//   for (let i = 0; i<arr.length; i++) {
//     if (query[keys] === arr[i][keys]) {
//       console.log(arr[i]);
//     }
//   }
// }

function findOne(arr, query) {
  for (let item of arr) {
    let match = true;
    for (let key in query) {
      if (!(key in item) || item[key] !== query[key]) {
        match=false;
      }
    }
    if (match) {
      return item;
    }
  }
  return null;
}

// function findOne(arr, query) {
//   // for (ley key in query)
//   const keys = Object.keys(query);
//   for (let i=0; i< arr.length; i++) {
//     for (let j=0; j<keys.length; j++) {
//       // if (!arr[i].hasOwnProperty(keys[j])) {
//       //   return 'not correct';
//       // }
//       if (!(keys[j] in arr[i]) {
//         return 'not correct';
//       }
//     }
//     for (let i = 0; i<arr.length; i++) {
//       if (query[keys] === arr[i][keys]) {
//         return (arr[i]);
//       }
//     }
//   }
// }

console.log(findOne(HEROES, { id: 1 }));
console.log(
  findOne(HEROES, { id: 10 }));
console.log(
  findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(
  findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(
  findOne(HEROES, { squad: 'Justice League' }));
