function myCountChar(haystack, needle){
    let i = 0
    for(element of haystack){
        if(element == needle){
            i++
        }
    }
    return i
}

console.log(myCountChar("Bonjour a tous", "o"));