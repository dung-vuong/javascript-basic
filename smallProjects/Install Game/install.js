function selectGame(){
    let game = document.getElementById("game");
    let ram = document.getElementById("ram");
    if (parseInt(game.value) >= 5){
        ram.disabled = false;
        game.disabled = true;
    }
}

function selectRam(){
    let ram = document.getElementById("ram");
    let card = document.getElementById("card");
    if (ram.value >= 4){
        card.disabled = false;
        ram.disabled = true;
    }
}

function selectCard(){
    let card = document.getElementById("card");
    let install = document.getElementById("install");
    if (card.value == "yes"){
        install.disabled = false;
        card.disabled = true;
    }
}

function install(){
    alert("Install Successfully!")
}