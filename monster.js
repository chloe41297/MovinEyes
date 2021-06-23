const Leye = document.querySelector(".leftPupil");
const Reye = document.querySelector(".rightPupil");

let currentX = 0;
let currentY = 0;
let pupilX = 0;
let pupilY = 0;
let pupilZ = 0;
let speed = 0.05;
let distance = 0;

function handleMouse(e){

    currentX = (e.clientX - window.innerWidth/2);
    currentY = (e.clientY - window.innerHeight/2);

    distance = Math.sqrt(Math.pow(currentX,2) + Math.pow(currentY,2));

    if( distance > 125){
        currentX = currentX - (distance-100)*(currentX / distance);
        currentY = currentY - (distance-100)*(currentY / distance);
    }
    console.log(pupilZ);
}
function loop(){
    pupilX += (currentX - pupilX) * speed;
    pupilY += (currentY - pupilY) * speed;
    pupilZ = -distance/20;
    
    
    Leye.style.transform = "perspective(100px) translate3d("+pupilX+"px,"+pupilY+"px,"+pupilZ+"px)";
    Reye.style.transform = "perspective(100px) translate3d("+pupilX+"px,"+pupilY+"px,"+pupilZ+"px)";

    window.requestAnimationFrame(loop);
}



function init(){
    window.addEventListener("mousemove",handleMouse);
    loop();
}
init();