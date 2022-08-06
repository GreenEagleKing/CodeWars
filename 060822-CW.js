//7 kyu Two fighters, one winner.

// Create a function that returns the name of the winner in a fight between two fighters.

//P - fighter object with name,health,attack damage properties, integer value above 0
//R - string winner of battle
//E
//P

//use conditional to select first attacker - if first attacker === fighter 1 then first attacker = fighter 1 else its fighter 2
// 


// function declareWinner(fighter1, fighter2, firstAttacker) {
//     const initiator;
//     if (firstAttacker === fighter1.name) {
//         initiator = fighter1
//     }

// }


declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") // "Lew"
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry") // "Harry"

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack
        fighter1.health -= fighter2.damagePerAttack
    }

    if(fighter1.health <= 0 && fighter2.health <= 0) {
        return firstAttacker
    } else if (fighter1.health <= 0) {
        return fighter2.name
    } else {
        return fighter1.name
    }
}


// 8 kyu Find Multiples of a Number

//P - integer, positive, not 0, limit always higher than base
//R - return array of muliples upto the limit
//E
//P

//divide limit by integer and round down to nearest whole number
//for loop


function findMultiples(integer, limit) {
    let arr = []
    for (let i = 1; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i)
        }
    } return arr
}

findMultiples(5,25) // [5,10,15,20,25]
findMultiples(5,7) // [5]