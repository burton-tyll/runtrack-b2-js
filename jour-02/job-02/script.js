let count = 0;

function myAddCount(){
    const counter = document.getElementById('count-displayer')
    const button = document.getElementById('add-count-btn')
    count++
    counter.innerHTML = count
}

