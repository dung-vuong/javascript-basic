function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let msg = document.getElementById("msg");
    let data = {username: "dungvuong", password: "camdung"};

    (username == data.username && password == data.password)? alert("Login successful!") : alert("Invalid username/password");
}