'use strict';

const spiderman = {
  name: 'Peter',
  job: 'photographer',
  boss: 'JJJ',
};
const superman = {
  name: 'Clark',
  job: 'journalist',
  boss: 'LL',
};
const ironman = {
  name: 'RDJ',
  job: 'dead',
};
const hulk = {
  name: 'Bruce',
  job: 'scientist',
  boss: 'BW'
};
  
const everyone = [spiderman, superman, ironman, hulk];
  
function writeJobs() {
  for (let i=0; i < everyone.length; i++) {
    if (everyone[i].boss) {
      console.log(`${everyone[i].job} ${everyone[i].name} reports to ${everyone[i].boss}`);
    } else {
      console.log(`${everyone[i].job} ${everyone[i].name} doesn't report to nobody`);
    }
  }
}

writeJobs();