function countDown (num){
    let cd =setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(cd);
            console.log ('Done!');
        }
        else {
            console.log (num);
        }
    },1000)
}


function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
        num = Math.random();
        times++
        if (num > .75){
            clearInterval(timer);
            console.log("It took " + times +" try/tries.");
        }
    },1000)
}
