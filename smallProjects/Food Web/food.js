function purchase(){
    document.getElementById("summary").style.display = "block";
    let name = document.getElementById("textName");
    let mobile = document.getElementById("textMobile");
    let shumai = document.getElementById("shumai");
    let hacao = document.getElementById("hacao");
    let wonton = document.getElementById("wonton");
    let eggroll = document.getElementById("eggroll");

    let mcost = 0;
    let acost = 0;
    let mname = " ";
    let aname = " ";
    if (shumai.checked){
        mcost = 5.95;
        mname = shumai.value;
    }
    if (hacao.checked){
        mcost = 5.95;
        mname = hacao.value;
    }
    if (wonton.checked){
        mcost += 3.95;
        mname += "<br>" + wonton.value;
    }
    if (eggroll.checked){
        mcost += 3.95;
        mname +=  "<br>" + eggroll.value;
    }

    document.getElementById("orderName").innerHTML = name.value;
    document.getElementById("orderMobile").innerHTML = mobile.value;
    document.getElementById("orderMeal").innerHTML = mname;
    document.getElementById("orderTotal").innerHTML = "$" + mcost;
}