window.addEventListener('keydown',(e)=>{
    let key_pressed = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(key_pressed == undefined){
        return;
    }
    else{
    key_pressed.classList.toggle('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play(); // play audio
    }
})


function removeTransition(e){
    // console.log(e); // here this refers to the elemnt at which the event occured /// we can use e.target too instead of this
    // if(e.propertyName !== "transform"){ return};
    this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key =>{
    key.addEventListener('transitionend', removeTransition);
})

// window.addEventListener('keyup',(e)=>{
//     let key_pressed = document.querySelector(`div[data-key="${e.keyCode}"]`);

//     if(!key_pressed){
//         return;
//     }
//     else{
//     key_pressed.classList.toggle('playing');
//     } 
// })
