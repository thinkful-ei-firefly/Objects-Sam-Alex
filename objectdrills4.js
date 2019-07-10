'use strict';

const spiderman = {
  name: 'Peter',
  job: 'photographer',
};
const superman = {
  name: 'Clark',
  job: 'journalist',
};
const ironman = {
  name: 'RDJ',
  job: 'dead',
};
const hulk = {
  name: 'Bruce',
  job: 'scientist',
};

const everyone = [spiderman, superman, ironman, hulk];



function writeJobs() {
  for (let i=0; i < everyone.length; i++) {
    console.log(`${everyone[i].name}, job is ${everyone[i].job}`);
  }
}

writeJobs();
