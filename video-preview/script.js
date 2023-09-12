console.log("page loaded...");

function hoverPlay(element) {
    element.play();
    element.muted = true;
}
function hoverAway(element) {
    element.pause();
    element.muted = true;
}