
var modal = document.getElementById("myModal-1");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
