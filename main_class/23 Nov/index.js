const inputTag = document.getElementById('input');

let timerId = null;
inputTag.addEventListener('keypress', function(event){
    
    if( null!==timerId )
        clearInterval(timerId);

    timerId = setTimeout(function(){
        console.log('api call');
    },1_000);
});