
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function resize(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    document.body.style.background ="url('D:/wod-lab2/welcome-pic.png')";
    document.body.style.backgroundSize = window.innerWidth.toString() + "px " +
    window.innerHeight.toString() + "px";
    document.body.style.backgroundRepeat = "no-repeat";
    
    
}

window.onload = function(){
    resize()
}
window.addEventListener('resize',function (){
    resize()
});