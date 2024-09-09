function myUpperCase(string){
    let min = "abcdefghijklmnopqrstuvwxyz ";
    let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let length=0;
    let newWord = '';
    //On récupère l'index majuscule
    for(letter of string){
        length++
        for(c in min){
            if(letter == min[c]){
                newWord += maj[c]
            }
        }
    }
    return newWord;
}

console.log(myUpperCase("bienvenue a tous"))