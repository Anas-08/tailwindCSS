// let time = 0;

// function hello() {
//     console.log("Hello");
//     time++;
//     if (time == 10) {

//         window.clearInterval(id);
//     }
// }

// let id = setInterval(hello, 1000);
// console.log(id);


let course_counter = document.querySelector(".course-counter");
let student_counter = document.querySelector(".student-counter");
let transition_counter = document.querySelector(".transition-counter");

let times = 0;

let id = setInterval(() => {
    course_counter.textContent = times * 1;

    times++;

    if (times == 601) {
        window.clearInterval(id);

    }
}, 10);

let id2 = setInterval(() => {
    student_counter.textContent = times;

    times++;

    if (times == 100001) {
        window.clearInterval(id2);

    }
}, .1);

let id3 = setInterval(() => {
    transition_counter.textContent = times * 2;

    times++;

    if (times == 5001) {
        window.clearInterval(id3);

    }
}, .1);