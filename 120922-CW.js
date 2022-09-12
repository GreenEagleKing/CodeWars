// 6 kyu Multiplication table

// Your task, is to create NxN multiplication table

// P - number, positive, integer
// R - array, with array inside, numbers, positive
// E
// P

// result is going to be 3 arrays, made up of the results of the multiplication to make the result, e.g. 1*3 = 3, 3 is made up of 1x1,1x2,1x3
// first loop is number 1 so, 1*1 1*2 1*3 as 3 is limit, 
// next loop is 2*1, 2*2, 2*3 

        multiplicationTable = function(size) {
            let arrHolder = []
            const resultArr = []
            let count = 1
            while(count <= size) {
                for(let i = 1; i <= size; i++){
                    arrHolder.push(count * i)    
                }
                resultArr.push(arrHolder)
                count++
            }
            return resultArr
        }
        
        multiplicationTable(3)  // [[1,2,3],[2,4,6],[3,6,9]]


        // result

        const multiplicationTable = n => {
            const res = [];
            for (let i = 1; i <= n; i++) {
              const row = [];
              for (let j = 1; j <= n; j++)
                row.push(i * j);
              res.push(row);
            }
            return res;
          }