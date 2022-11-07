








function playsound(e){
    let audio=document.querySelector(`audio[data-key="${e.keycode}]`);
    let key=document.querySelector(`.key`)

}




window.addEventListener("keydown",playsound)