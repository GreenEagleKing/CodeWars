// 7 kyu Sum of angles

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon.

// P - number, integer, greater than 2
// R - number, positive, 
// E
// P

// -2 from n
// multiply remaining n by 180

function angle(n) {
    return (n - 2) * 180
  }

angle(3) // 180 -2 from sides = 1, 1 * 180
angle(4) // 360 -2 

// 5 kyu Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

// P - string, url
// R - string, core part of domain
// E
// 

// if string includes 'www'
// find the index of '.' and '.' 
// return the substring between those two indexes
// else find the index of '//' and '.'
// return the string between the indexes

function domainName(url){
    let urlArr = url.split()
    let newArr = []
    let dot = '.'
    if (url.includes('www')) {
        for(let i = 0; i => urlArr.length; i++) {
           return newArr.push(urlArr.indexOf(dot))
        }
        
    }
    console.log(indexPos)
  }

domainName("http://www.github.com/carbonfive/raygun") //domain name = "github"

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };