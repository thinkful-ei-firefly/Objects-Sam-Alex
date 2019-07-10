'use strict';

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function() {
            console.log(`${name} is a ${race} from ${origin}`)
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
    }

}
let characters = [
    createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'Shire', 2, 1),
    createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5),
]
characters.push(createCharacter('Arwen Undomiel', 'Arwen', 'Halife', 'Rivendell', 5, 5));

chartacters.find(this.nickname, )