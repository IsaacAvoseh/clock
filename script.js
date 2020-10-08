const secondHand = document.querySelector('.second-hand');

const minuteHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); // gives us the current time
    const seconds = now.getSeconds(); // gives us the seconds of the current minute
    const secondsDegrees = ((seconds / 60) * 360) + 90; //this will give us the correct amount of ticks per second the seconds hand needs to do. divides by 60 (total amount of seconds) and multiplies by 360 degrees. The + 90 offsets the original 90degrees we're giving it in the CSS.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);