/*
function color(evt){
    tgt = evt.target
    tgt.style.background = "blue";
    console.log("Done "+ tgt.id + tgt.parentElement.parentElement.parentElement.id)
}

document.addEventListener("click",color,false);
*/

const props = ["semi-red","richo-red","tank-red","semi-blue","richo-blue","tank-blue"];

function propfind(evt){
    tgt = evt.target;
    console.log("Found "+tgt.id)
}
document.addEventListener("click",propfind,false);
