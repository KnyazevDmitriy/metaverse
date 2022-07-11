
var modal = document.getElementById("myModal-1");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

var modall = document.getElementById("myModal-2");

var button = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close2")[0];

button.onclick = function() {
    modall.style.display = "block";
}

span.onclick = function() {
    modall.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modall) {
            modall.style.display = "none";
    }
}