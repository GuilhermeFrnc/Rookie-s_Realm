
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");


openModalBtn.onclick = function() {
    modal.style.display = "block";
}

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}