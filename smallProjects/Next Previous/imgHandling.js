let pictures = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg","images/img4.jpg","images/img5.jpg"];
let c = 0;
function previousClick(){
    let pic = document.getElementById("pic");
    if (c > 0){
        c--;
    }
    pic.src = pictures[c];
}

function nextClick(){
    let pic = document.getElementById("pic");
    if (c < pictures.length - 1){
        c++;
    }
    pic.src = pictures[c];
}