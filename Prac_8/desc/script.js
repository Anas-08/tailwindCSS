

// function getColor() {

//     // hex code
//     const randomNumber = Math.floor(Math.random() * 16777215);
//     // console.log(randomNumber);

//     // 
//     const randomColor = "#" + randomNumber.toString(16);
//     // console.log(randomNumber + " " + randomColor);
// }

const getColor = () => {
    // hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);

    // 
    const randomColor = "#" + randomNumber.toString(16);
    // console.log(randomNumber + " " + randomColor);

    document.querySelector(".bcolor").style.backgroundColor = randomColor;

    color_code.innerHTML = randomColor;

    // save in clipboard automatic

    navigator.clipboard.writeText(randomColor);
}


const btn = document.querySelector("#btn");
const color_code = document.querySelector("#color_code");

btn.addEventListener("click", getColor);

getColor();