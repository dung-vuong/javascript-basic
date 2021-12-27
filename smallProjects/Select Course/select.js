function submitClick(){
    let java = document.getElementById("Java");
    let python = document.getElementById("Python");
    let HTML = document.getElementById("HTML");
    let CSS = document.getElementById("CSS");
    let Javascript = document.getElementById("Javascript");
    let msg = document.getElementById("msg");

    let course = "";
    if (java.checked){
        course += java.value + "<br>"
    }
    if (python.checked){
        course += python.value + "<br>"
    }
    if (HTML.checked){
        course += HTML.value + "<br>"
    }
    if (CSS.checked){
        course += CSS.value + "<br>"
    }
    if (Javascript.checked){
        course += Javascript.value + "<br>"
    }
    msg.innerHTML = "Selected Courses" + "<br>" + course
}