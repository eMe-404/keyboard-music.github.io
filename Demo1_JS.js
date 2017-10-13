const bar = document.querySelectorAll(".bar");
bar.forEach(b => b.style.animation = "unset"); //first enter the page ,there should no be any animation

const allAudio = document.querySelectorAll("audio"); //preload the music
allAudio.forEach(function (audio) {
    audio.setAttribute("preload","auto");
});

function playSound(e) {
    e.preventDefault();      //can prevent the space pressed fox problem
                            // but all other defaults prevented too including the F12.
    const keyPressed = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

    /*  //create another function to play all the Desktop and mobile animation

    const bar = document.querySelectorAll(".bar");
    const  allAudio = document.querySelectorAll("audio");

    console.log(keyPressed);
    //three bar area match with html ,in order to change bar color with key area color
    let bar1 = document.getElementsByClassName("bar area1");
    let bar2 = document.getElementsByClassName("bar area2");
    let bar3 = document.getElementsByClassName("bar area3");

    // Chrome "-" keyCode and FireFox "-" keyCode are different so use if to solve compatibility
    if(e.keyCode === 189 || e.keyCode === 173){
        document.getElementById("stopKey").classList.add("keyPressed");

        //stop all music and animation
        allAudio.forEach(a => a.pause());
        bar.forEach(b => b.style.animation = "unset");
    }
    else{
        keyPressed.classList.add("keyPressed");
    }*/

    if(!audio) return;

    keyBarAnimation(keyPressed,e.keyCode.toString());
    audio.currentTime = 0; //stop the function in order to replay the audio
    audio.play();

   /* audio.onended = function () {

    };
    setTimeout(function () {
        console.log(audio.duration);
    },2000);*/


    //using querySelector returns a nodeList and it can use the forEach() function
    // but using document.getElementBy... also return a nodeList and it can`t use the forEach()
    // So I use the for of because they prototype is object and it can iterable

   /* if(keyPressed.classList.contains("area1")){
        for(let i of bar1){
            i.style.cssText = "background-image: linear-gradient(139deg, #b68a10 0%, #330e0e 60%)";
        }
    }

    else if(keyPressed.classList.contains("area2")){
        for(let i of bar2){
            i.style.cssText = "background-image: linear-gradient(139deg, #b311b6 0%, #330e0e 60%)";
        }
    }

    else if(keyPressed.classList.contains("area3")){
        for(let i of bar3){
            i.style.cssText = "background-image: linear-gradient(139deg, #66b639 0%, #330e0e 60%)";
        }
    }
    else if(keyPressed.classList.contains("space")){
        bar.forEach(val => val.style.cssText = "background-image: linear-gradient(139deg, white 0%, black 60%)");

    }
*/
/*
        //don't need these part ,cssText already removed animation property
        else{bar.forEach(function (val) {
        if(keyPressed.classList.contains("area1")){
            for(let i of bar1){
                i.style.removeProperty("animation")   ;
            }
        }

        });
    }*/

}
function touche(e) {
    // e.currentTarget.classList.add("keyPressed");

    const keycode =e.currentTarget.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key = "${keycode}"]`);
    if(!audio) return;

    keyBarAnimation(e.currentTarget,keycode);
    audio.currentTime = 0;
    audio.play();
    console.log(e.currentTarget)
}

function keyBarAnimation(target,keycode) {

    const bar = document.querySelectorAll(".bar");
    const  allAudio = document.querySelectorAll("audio");

    //three bar area match with html ,in order to change bar color with key area color
    let bar1 = document.getElementsByClassName("bar area1");
    let bar2 = document.getElementsByClassName("bar area2");
    let bar3 = document.getElementsByClassName("bar area3");
    console.log(keycode);

    //key animation
    if(keycode === "189" || keycode === "173"){
        document.getElementById("stopKey").classList.add("keyPressed");

        //stop all music and animation
        allAudio.forEach(a => a.pause());
        bar.forEach(b => b.style.animation = "unset");
    }
    else{
        target.classList.add("keyPressed");
    }

    //   bar animation
    if(target.classList.contains("area1")){
        for(let i of bar1){
            i.style.cssText = "background-image: linear-gradient(139deg, #b68a10 0%, #330e0e 60%)";
        }
    }

    else if(target.classList.contains("area2")){
        for(let i of bar2){
            i.style.cssText = "background-image: linear-gradient(139deg, #b311b6 0%, #330e0e 60%)";
        }
    }

    else if(target.classList.contains("area3")){
        for(let i of bar3){
            i.style.cssText = "background-image: linear-gradient(139deg, #66b639 0%, #330e0e 60%)";
        }
    }
    else if(target.classList.contains("space")){
        bar.forEach(val => val.style.cssText = "background-image: linear-gradient(139deg, white 0%, black 60%)");

    }
}


/*function stopAll() {
    const  allAudio = document.querySelectorAll("audio");
    const bar = document.querySelectorAll(".bar");

    // allAudio.forEach(a => a.pause());
    bar.forEach(b => b.style.animation = "unset");
}*/

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("keyPressed");
    const bar = document.querySelectorAll(".bar");
    bar.forEach(a => a.style.removeProperty("background"));


}

const keys = document.querySelectorAll(".key");
window.addEventListener("keydown",playSound);
// keys.addEventListener("click",playSound);
keys.forEach(key => key.addEventListener("transitionend",removeTransition));


// for mobile
keys.forEach(key => key.addEventListener("touchstart",touche));


