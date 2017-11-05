function ticktock() {
    const date = new Date();

    (function secondAnimation() {
        const hand = document.querySelector(".second-hand");
        const secondHand = ((date.getSeconds() / 60) * 360) + 90;   
        hand.style.transform = `rotate(${secondHand}deg)`;
    })();
    
    (function minuteAnimation() {
        const hand = document.querySelector(".min-hand");
        const minHand = ((date.getMinutes() / 60) * 360) + 90;
        hand.style.transform = `rotate(${minHand}deg)`;
    })();

    (function hourAnimation() {
        const hand = document.querySelector(".hour-hand");
        const hourHand = ((date.getHours() / 60) * 360) + 90;
        hand.style.transform = `rotate(${hourHand}deg)`;
    })();


}

setInterval(ticktock,1000);