
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

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var btnFechar = document.getElementsByClassName("close")[0];

    btnFechar.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var filterForm = document.getElementById('filterForm');
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        document.getElementById('dica_02').style.display = 'none';
        document.getElementById('dica_03').style.display = 'none';

        modal.style.display ="none";
    });
});