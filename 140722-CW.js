// 7 kyu Reverse words

function reverseWords(str) {
    let word = str.split(" ")
    const revWord = word.map((element) => {
        return element.split("").reverse().join("")
    });
    return revWord.join(" ")
}

reverseWords("This is an example!")

//7 kyu Isograms

function isIsogram(str){
    let word = str.toLowerCase().split("")
    const noDups = new Set(word);
    return word.length == noDups.size;
}

isIsogram("aba")

// 8 kyu Switch it Up!

function switchItUp(number){
    switch(number) {
        case 0:
            return "Zero"
            break;
        case 1:
            return "One"
            break;
         case 2:
            return "Two"
            break;
        case 3:
            return "Three"
            break;
        case 4:
            return "Four"
            break;
        case 5:
            return "Five"
            break;
        case 6:
            return "Six"
            break;
        case 7:
            return "Seven"
            break;
        case 8:
            return "Eight"
            break;
        case 9:
            return "Nine"
            break;    
    }
}

switchItUp(5)