// 7 kyu Number of People in the Bus

// Your task is to return number of people who are still in the bus after the last bus station 

// P - array, positive integers,first stop is always 0 for people getting off bus, first number people getting on bus, second number people getting off bus
// R - integer, number of people left on the bus,
// E
// P

// reduce array
// accumulate people on bus minus people getting off

var number = function(busStops){
   return busStops.reduce((acc, [on, off]) => acc + on - off, 0)
}

number([[10,0],[3,5],[5,8]]) // 5

// Added to Anki, discovered you can select array values within an array

