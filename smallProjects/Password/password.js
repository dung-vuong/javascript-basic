function verifyPassword(){
    let pass = document.getElementById("pass").value;
    let msg = document.getElementById("msg");
    let grade = document.getElementById("grade");

    function showGrade(min, max, value, low, high){
        grade.min = min;
        grade.max = max;
        grade.value = value;
        grade.low = low;
        grade.high = high;
    }

    let regExp = /(?=[A-Z])\w{4,15}/;

    if(pass.match(regExp)){
        msg.innerHTML = "Strong";
        showGrade(1,100,100,0,0);
    }
    else{
        if(pass.length == 0){
            msg.innerHTML = "";
            showGrade(1,100,0,0,0);
        }
        else if(pass.length < 4){
            msg.innerHTML = "Poor";
            showGrade(1,100,100,60,80);
        }
        else{
            msg.innerHTML = "Weak";
            showGrade(1,100,100,40,80);
        }
    }
}