var count1 = 9;
var count2 = 12;
var count3 = 9;
function addLike(element) {
    if (element.id === "b1") {
        let countElement = document.querySelector("#like1");
        count1++;
        countElement.innerText = count1 + " like(s)"
    }
    else if (element.id === "b2") {
        let countElement = document.querySelector("#like2");
        count2++;
        countElement.innerText = count2 + " like(s)"
    }
    else {
        let countElement = document.querySelector("#like3");
        count3++;
        countElement.innerText = count3 + " like(s)"
    }
}
