// 2 / 5 String Challenge

// 7 kyu Credit Card Mask

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// P - string, numbers
// R - replace all but last 4 digits with #
// E
// P

// reverse string
// select all digits after 4 
// replace with #
// reverse string and join 

function maskify(cc) {
    let revStr = cc.split("").reverse().join("")
    let lastFour = revStr.slice(0,4).split("").reverse().join("")
    let selectStr = revStr.substring(4).replace(/[0-9, a-z]/g, "#")
    return selectStr + lastFour
}

maskify("4556364607935616") // "############5616"

// Not elegant but worked

// Better version below

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }