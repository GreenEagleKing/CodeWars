// 8 kyu Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
  }

  nameShuffler("john McClane")


// 8 kyu L1: Set Alarm

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

function setAlarm(employed, vacation){
    if (employed === true && vacation === false) {
        return true
    } else {
        return false
    }
}

setAlarm(true, true)

// 8 kyu Area or Perimeter

// ou are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l === w) {
        return l*w
    } else {
        return (l + w) *2
    }
  };

// 7 kyu Remove anchor from URL

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    let urlSplit = url.split("#")
    return urlSplit[0]
  }

 removeUrlAnchor("www.codewars.com#about") 