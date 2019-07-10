'use strict';

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      console.log(`${name} is a ${race} from ${origin} who uses ${weapon}`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (this.defense > character.attack) {
        y = 0;
      } 
      if (character.defense > this.attack) {
        x = 0;
      }
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
    }
  };

}
let characters = [
  createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
];
characters.push(createCharacter('Arwen Undomiel', 'Arwen', 'Halife', 'Rivendell', 5, 5, 'Hadhafang'));

function findAragorn(char) {
  return char.nickname === 'Aragorn';
}

function getHobbits(char) {
  return char.race === 'Hobbit';
}

function getAttackers(char) {
  return char.attack > 5;
}

characters.find(findAragorn).describe();

const hobbits = characters.filter(getHobbits);
console.log(hobbits[0]);
console.log(hobbits[1]);

const attackers = characters.filter(getAttackers);
console.log(attackers[0]);
console.log(attackers[1]);
console.log(attackers[2]);

