function Register(){
    //STORE HANDLING
    let ID = document.getElementById("proID").value;
    let name = document.getElementById("proName").value;
    let price = document.getElementById("proPrice").value;
    let manu = document.getElementById("proManu").value;

    //Yes No Handling
    let yes = document.getElementById("yes");
    let no = document.getElementById("no");
    if (yes.checked)
        stock = yes.value;
    if (no.checked)
        stock = np.value;

    //SELECT HANDLING
    let city = document.getElementById("city").value


    //PRINT TO PAGE
    document.getElementById("listID").innerText = ID;
    document.getElementById("listName").innerText = name;
    document.getElementById("listPrice").innerText = price;
    document.getElementById("listManu").innerText = manu;
    document.getElementById("inStock").innerText = stock;
    document.getElementById("listCity").innerText = city;
}