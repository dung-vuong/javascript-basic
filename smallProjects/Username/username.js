function checkUser(){
    let users = [{name: "Dung"}, {name: "Danny"}, {name: "Dawn"}]
    let textName = document.getElementById("textName").value;
    let msg = document.getElementById("msg");

    for (let i = 0; i < users.length; i++){
        if (textName == users[i].name){
            msg.innerHTML = "Username is taken."
            return
        }
        else{
            msg.innerHTML = "Available to use."
        }
    }
}