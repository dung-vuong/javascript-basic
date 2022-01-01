function getDetails(){
    document.getElementById("details").style.display = "block";
    document.getElementById("host").innerHTML = location.host;
    let msg = "";
    switch(location.protocol){
        case "http:":
            msg = "page accessed from server and secured";
            break;
        case "file:":
            msg = "page is not accessed from server";
            break;
    }
    document.getElementById("protocol").innerHTML = location.protocol + "<br>" + msg;
    document.getElementById("url").innerHTML = location.href;
}