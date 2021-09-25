
var numberOfDrum=document.querySelectorAll('button').length;
for(var i=0;i<numberOfDrum;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function (){
        
       playSound(this.innerHTML);
       buttonAnimation(this.innerHTML);
      
       
    });
    document.addEventListener('keypress',function(event){
       playSound(event.key);
       buttonAnimation(event.key);
       


    });
    
}
function playSound(key){
    switch (key) {
        case "w":
            audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
             break;
        case "s":
            audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "d":
            audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:console.log(soundText);
        break;
          
    }

}
function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },100);
}

