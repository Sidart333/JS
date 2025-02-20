const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += hex[Math.round(Math.random() * 10)];
    }
    return color;
}

let intervalId;

// console.log(randomColor());

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
 