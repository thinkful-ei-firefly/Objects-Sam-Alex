const spiderman = {job: 'photographer',}
const superman = {job: 'journalist',}
const ironman = {job: 'dead',}
const hulk = {job: 'scientist',}

const everyone = [spiderman, superman, ironman, hulk];
for (const key in everyone){
    console.log(`${everyone}, job is ${everyone[key]}`);
    console.log(`${everyone[key]}, job is ${everyone[key].job}`);
}

