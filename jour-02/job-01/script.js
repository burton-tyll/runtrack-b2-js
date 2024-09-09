function myChangeBackgroundColor(){
    let width = window.innerWidth;
    

    if(width >= 1337){
        document.documentElement.style.backgroundColor = '#ffb703';
    }else if(width > 504){
        document.documentElement.style.backgroundColor = '#d90429';
    }else{
        document.documentElement.style.backgroundColor = '#003049';
    }
}

window.onresize = myChangeBackgroundColor;
