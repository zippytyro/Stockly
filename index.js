function openNav() {
    document.getElementById("nav-bar").style.width = "250px";
    document.getElementById("nav-bar").style.backgroundColor = "#512b58";
    document.body.style.backgroundColor = "#512b5880";
}

function closeNav() {
    document.getElementById("nav-bar").style.width = "0";
    document.getElementById("nav-bar").style.backgroundColor = "transparent";
    document.body.style.backgroundColor = "transparent";
}

function getDate(){
    var date = new Date();
    date = date.getFullYear();
    return date;
}

var displayDate = document.getElementById("date");
displayDate.innerText = getDate();