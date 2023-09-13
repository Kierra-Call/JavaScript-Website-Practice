function removeCookieBar() {
  let element = document.querySelector("#cookies");
  element.remove();
}
function degreesF(selection) {
  if (selection.value === "°F") {
    let temp1 = document.querySelector("#temp1");
    let temp2 = document.querySelector("#temp2");
    let temp3 = document.querySelector("#temp3");
    let temp4 = document.querySelector("#temp4");
    let temp5 = document.querySelector("#temp5");
    let temp6 = document.querySelector("#temp6");
    let temp7 = document.querySelector("#temp7");
    let temp8 = document.querySelector("#temp8");
    temp1.innerText = "75.2°";
    temp2.innerText = "64.4°";
    temp3.innerText = "80.6°";
    temp4.innerText = "66.2°";
    temp5.innerText = "69.8°";
    temp6.innerText = "60.8°";
    temp7.innerText = "78.8°";
    temp8.innerText = "69.8°";
  } 
  else {
    let temp1 = document.querySelector("#temp1");
    let temp2 = document.querySelector("#temp2");
    let temp3 = document.querySelector("#temp3");
    let temp4 = document.querySelector("#temp4");
    let temp5 = document.querySelector("#temp5");
    let temp6 = document.querySelector("#temp6");
    let temp7 = document.querySelector("#temp7");
    let temp8 = document.querySelector("#temp8");
    temp1.innerText = "24°";
    temp2.innerText = "18°";
    temp3.innerText = "27°";
    temp4.innerText = "19°";
    temp5.innerText = "21°";
    temp6.innerText = "16°";
    temp7.innerText = "26°";
    temp8.innerText = "21°";
  }
}
