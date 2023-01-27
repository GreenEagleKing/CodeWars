//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// p - string, url
// r - string just domain name

function domainName(str) {
    const strSplit = str.split(/[/.-]/g)
    return strSplit[2] === 'www' ? strSplit[3] : strSplit[2]
}




console.log(domainName("http://github.com/carbonfive/raygun")) //== "github" 
console.log(domainName("http://www.zombie-bites.com")) //== "zombie-bites"
console.log(domainName("https://www.cnet.com")) //== "cnet