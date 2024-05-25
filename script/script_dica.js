document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const averageRating = document.getElementById('average-rating');

    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            resetStars();
            this.classList.add('hover');
            const value = this.getAttribute('data-value');
            highlightStars(value);
        });

        star.addEventListener('mouseout', function() {
            resetStars();
            if (selectedRating) {
                highlightStars(selectedRating);
            }
        });

        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            highlightStars(selectedRating);
            calculateAverageRating(selectedRating);
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('hover');
            }
            if (star.getAttribute('data-value') <= selectedRating) {
                star.classList.add('selected');
            }
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('hover');
            star.classList.remove('selected');
        });
    }

    function calculateAverageRating(userRating) {
        const numberOfRatings = 6;
        let totalRating = parseInt(userRating);
    
        for (let i = 0; i < numberOfRatings - 1; i++) {
            totalRating += 5; 
        }
    
        const average = (totalRating / numberOfRatings).toFixed(1);
        averageRating.textContent = average;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var name = localStorage.getItem('name');
    var avatar = localStorage.getItem('avatar');

    document.querySelector('#form_comentario textarea').addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            adicionarComentario(name, avatar, this.value);
            this.value = '';
        }
    });
});

function adicionarComentario(name, avatar, comentario) {
    var comentariosContainer = document.getElementById('comentarios');

    var novoComentario = document.createElement('div');
    novoComentario.className = 'comentario';

    var boxIcon = document.createElement('div');
    boxIcon.className = 'box_icon';
    var img = document.createElement('img');
    img.src = avatar || 'img/default-avatar.png';
    img.alt = "Avatar do usuário";
    boxIcon.appendChild(img);

    var strong = document.createElement('strong');
    strong.textContent = name || 'Anônimo';

    var p = document.createElement('p');
    p.textContent = comentario;

    novoComentario.appendChild(boxIcon);
    novoComentario.appendChild(strong);
    novoComentario.appendChild(p);

    var comentariosTitulo = comentariosContainer.querySelector('h3');
    comentariosContainer.insertBefore(novoComentario, comentariosTitulo.nextSibling);
}