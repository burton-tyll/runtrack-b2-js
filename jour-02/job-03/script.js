function myDisplayText(){
    let text = document.getElementById('text-displayer')
    let input = document.getElementById('input-text')
    text.innerHTML = input.value
}

function myTurnBold(){
    let text = document.getElementById('text-displayer')
    text.style.fontWeight = 'bold'
}

function myTurnItalic(){
    let text = document.getElementById('text-displayer')
    text.style.fontStyle = 'italic'
}

function myClearText(){
    let text = document.getElementById('text-displayer')
    text.innerHTML = ''
}