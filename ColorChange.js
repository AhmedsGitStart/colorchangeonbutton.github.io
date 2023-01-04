let black = document.getElementById("black");
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let pink = document.getElementById("pink");
black.addEventListener('click', clickMe = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = "'Courier New', Courier, monospace";
})
blue.addEventListener('click', blueme = () => {
    document.body.style.backgroundColor = '#00cec9';
    document.body.style.color = 'white';
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
})
red.addEventListener('click', picovoid = () => {
    document.body.style.backgroundColor = '#192a56';
    document.body.style.color = 'white';
    document.body.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
})
pink.addEventListener('click', cursive = () => {
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'black';
    document.body.style.fontFamily = "cursive";
})