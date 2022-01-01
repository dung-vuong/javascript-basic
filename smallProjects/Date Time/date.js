function bodyload(){
    let name = prompt("Enter your name: ")
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let now = new Date();
    let weekday = now.getDay();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let today = days[weekday] + " " + day + ", " + months[month] + " " + year;

    document.getElementById("msg").innerHTML = today;
    let pic = document.getElementById("pic");
    document.getElementById("uname").innerHTML = "Hi, " + name;
    let hrs = now.getHours();
    if (hrs >= 5 && hrs < 12){
        pic.src = "images/img1.jpg"
    }
    else if (hrs >= 12 && hrs < 17){
        pic.src = "images/img2.jpg"
    }
    else if (hrs >= 17 && hrs <= 23){
        pic.src = "images/img3.jpg"
    }

}