// 8 kyu What's the real floor?

// Write a function that given a floor in the american system returns the floor in the european system.

// P - number, whole, can be neg/pos
// R - number with 1st floor removed and 13th floor
// E
// P

// if number is greater than 13 minus 2
// if number is greater than 1 minus 1
// else do nothing

function getRealFloor(n) {
    if (n > 13) {
        return n - 2
    } else if (n > 0) {
        return n -1
    } else {
        return n
    }
}

getRealFloor(1)//0
getRealFloor(5)//4
getRealFloor(15)//13


// 6 kyu Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

//P - positive integer
//R - Number of floors represented with *, in an array
//E
//P

// starting from 1 after each floor add 2 to * count 
// e.g. 1 = *, 2 = ***, 3 = *****
// use a loop, add each loop value to array


function towerBuilder(nFloors) {
    let starCount = "*"
    const starArr = []
    for(let i = 1; i <= nFloors; i++) {
        starArr.push(i)
    }
    const resultArr = starArr.map(num => starCount += num)
    return resultArr
  }

  towerBuilder(6)



  //// more difficult than expected. Forgot to include spaces too

  function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }