
const props= ["semi-red","richo-red","tank-red","semi-blue","richo-blue","tank-blue"];
//const props_blue = ["semi-blue","richo-blue","tank-blue"]
const positions = [];
const valid = [];
current_piece = '0';
turn = 0;
blue_click = 0;
red_click = 0; // 0 - check valid moves    1 - choose move

//determines the color of the player
function player_color(){
    if (document.getElementById("turn").innerText == 'Blue'){
        document.getElementById("turn").style.color = '#00b7ef';
    }
    else{
        document.getElementById("turn").style.color = '#ed1c24';
    }
}

//stores the initial positions
for(i=0; i< props.length;i++){
    child = document.getElementById(props[i]);
    positions[i] = child.parentElement.id
}

function highlight(evt){
    if(blue_click == 0){
        console.log("highlight running");
        tgt = evt.target;
        if(props.includes(tgt.id)){
            current_piece = tgt.id;
            posn = positions[props.indexOf(tgt.id)];
            for(i=-1;i<2;i++){
                for(j=-1;j<2;j++){
                    id_search = String.fromCharCode(posn.charCodeAt(0)+i) + (Number(posn[1])+j); //Checks one of the neighbouring squares, depending on loop
                    target_sq = document.getElementById(id_search);
                    if(!(positions.includes(id_search)) && target_sq != null){
                        target_sq.style.background = "#a6e3bb";
                        valid.push(id_search);
                    }
                }
            }
        } 
        blue_click = 1;
    }  
}

function move(evt){
    if(blue_click == 1){
        console.log("move running")
        tgt = evt.target;
        console.log(valid.includes(tgt.id));
        if(valid.includes(tgt.id)){
            img_html = `<img src="img/${current_piece}.png" alt=${current_piece}/>`;
            document.getElementById(tgt.id).innerHTML = img_html;
            document.getElementById(current_piece).parentElement.innerHTML = '';
            for(i=0;i<valid.length;i++){
                document.getElementById(valid[i]).style.background = 'white';
            }
            blue_click == 0;
        }
    }
}
document.addEventListener("click",highlight,false);
document.addEventListener("dblclick",move,false);
