// 7 kyu Deodorant Evaporator

// This program tests the life of an evaporator containing a gas.

// P - content in milliliters, evap per day percentage, threshold percentage, strictly positive nums
// R - whole number
// E
// P

// while content is greater or equal to threshold remove 10% each day

function evaporator(content, evap_per_day, threshold){ 
    const minimum = threshold / 100 * content
    while ( content !== minimum ) {
        content = evap_per_day / content
        content++
    }
  }

 evaporator(10,10,5) // 29 

 function evaporator(content, evap_per_day, threshold){ 
    let days = 0
    let gas = 100
    while ( gas >= threshold ) {
        gas -= gas * evap_per_day / 100
        days++
    }
    return days
  }

 evaporator(10,10,5) 

// 8 kyu Convert to Binary

// P -  positive number whole
// R - binary value, number
// E
// P

// use to string

function toBinary(n){
    return Number(n.toString(2))
  }

  toBinary(5) // 101