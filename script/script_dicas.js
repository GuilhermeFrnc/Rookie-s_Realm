
document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById("openModalBtn");
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];

    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var selectedNota, selectedIdade;
    var circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            if (this.parentElement.id === 'nota-options') {
                document.querySelectorAll('#nota-options .circle').forEach(c => c.classList.remove('selected'));
                selectedNota = this.getAttribute('data-value');
            } else if (this.parentElement.id === 'idade-options') {
                document.querySelectorAll('#idade-options .circle').forEach(c => c.classList.remove('selected'));
                selectedIdade = this.getAttribute('data-value');
            }
            this.classList.add('selected');
        });
    });

    var filterForm = document.getElementById('filterForm');
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        document.getElementById('dica_02').style.display = 'none';
        document.getElementById('dica_03').style.display = 'none';

        modal.style.display = "none";
    });
});