const randomColor = function(){
    let colorCode = "0123456789ABCDEF";
    let hexColor = "#";
    for(let i=1;i<=6;i++){
        hexColor += colorCode[Math.floor(Math.random()*16)];
    }
    return hexColor;
}

let colorId;
const startChangeColor = function(){

    if(!colorId){
        colorId = setInterval(regularChange,1000);
    }

    function regularChange(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangeColor = function(){
    clearInterval(colorId);
    colorId = null;
}

document.querySelector('#start').addEventListener('click',startChangeColor);
document.querySelector('#stop').addEventListener('click',stopChangeColor);