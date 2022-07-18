// 8 kyu Powers of 2

function powersOfTwo(n){
    let arr = []
    for (let i = 0; i <= n; i++) {
            arr.push(Math.pow(2, i))
        }
        return arr
    } 

powersOfTwo(1)

// 7 kyu Check the exam

function checkExam(array1, array2) {
    let sum = 0
    for(var i = 0;i < array1.length; ++i)
        if(array1[i] === array2[i]) {
                    sum += 4
        } else if (array1[i] !== array2[i] && array2[i] === "") {
            sum += 0
        } else if (array1[i] !== array2[i]) {
            sum -= 1
        }
        if (sum <= 0) {
            return 0
        } else {
        return sum
        }
}

   checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])

//7 kyu Round up to the next multiple of 5

function roundToNext5(n){
    return Math.ceil(n / 5) * 5
  }
