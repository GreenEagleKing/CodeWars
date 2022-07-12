//8 kyu Sum The Strings

function sumStr(a,b) {
    return (Number(a) + Number(b)).toString()
}
sumStr("5","5")

//8 kyu Sentence Smash

function smash (words) {
    let sentance = "";
    for (let i = 0; i < words.length; ++i) {
        if (i === words.length-1) {
            sentance += `${words[i]}`
        } else {
            sentance += `${words[i]} `
        }
    }
    return sentance
 };

 smash(['hello', 'world', 'this', 'is', 'great'])

 // 8 kyu If you can't sleep, just count sheep!!

 var countSheep = function (num){
     let count = ""
    for (let i = 1; i <= num; ++i) {
        count += `${i} sheep...`
    }
    return count
  }

countSheep(5)

// 8 kyu Find the smallest integer in the array

