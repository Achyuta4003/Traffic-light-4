let bulb1 = document.getElementsByClassName('light1')
let bulb2 = document.getElementsByClassName('light2')
let bulb3 = document.getElementsByClassName('light3')
let bulb4 = document.getElementsByClassName('light4')



let lights1 = [1, 2, 4] // [red, orange, green]

let delay = [20, 10, 10]
let color = [["#200000", "red"], ["#202000", "orange"], ["#002000", 'green']]

function initial() {
    start1()
    start2()
    start3()
    setTimeout(start4, 10000)
}





let current1 = 0;
function start1() {
    for (let i = 0; i < 3; i++) {

        let glowstatus = (lights1[current1] & Math.pow(2, i)) / Math.pow(2, i) // 0 --> off, 1--> on
        console.log("1", [glowstatus]);

        bulb1[i].style.backgroundColor = color[i][glowstatus]

    }

    setTimeout(start1, delay[current1] * 1000)
    current1 = (current1 + 1) % 4

}





let current2 = 2;
function start2() {
    for (let i = 0; i < 3; i++) {

        let glowstatus = (lights1[current2] & Math.pow(2, i)) / Math.pow(2, i) // 0 --> off, 1--> on
        console.log("2", [glowstatus]);

        bulb2[i].style.backgroundColor = color[i][glowstatus]

    }

    setTimeout(start2, delay[current2] * 1000)
    current2 = (current2 + 1) % 4

}




let current3 = 1;
function start3() {
    for (let i = 0; i < 3; i++) {

        let glowstatus = (lights1[current3] & Math.pow(2, i)) / Math.pow(2, i) // 0 --> off, 1--> on
        console.log("3", [glowstatus]);

        bulb3[i].style.backgroundColor = color[i][glowstatus]

    }

    setTimeout(start3, delay[current3] * 1000)
    current3 = (current3 + 1) % 4

}




let current4 = 1;
function start4() {
    for (let i = 0; i < 3; i++) {

        let glowstatus = (lights1[current4] & Math.pow(2, i)) / Math.pow(2, i) // 0 --> off, 1--> on
        console.log("4", [glowstatus]);

        bulb4[i].style.backgroundColor = color[i][glowstatus]

    }

    setTimeout(start4, delay[current4] * 1000)
    current4 = (current4 + 1) % 4

}


