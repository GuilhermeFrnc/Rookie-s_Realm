var modal = document.getElementById('modal_editar');
var btnEditar = document.getElementById("editar");
var btnFechar = document.getElementsByClassName("close")[0];
var btnAlterar = document.getElementById("fazer_alteracao");
var selectedAvatar = null;

btnEditar.onclick = function() {
    modal.style.display = "block";
}

btnFechar.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('.avatar').forEach(function(avatar) {
    avatar.onclick = function() {
        document.querySelectorAll('.avatar').forEach(function(avatar) {
            avatar.style.border = "none";
        });
        avatar.style.border = "2px solid #007BFF";
        selectedAvatar = avatar.getAttribute('src');
    }
});

btnAlterar.onclick = function() {
    var novoNome = document.getElementById("novo_nome").value;
    var novaDescricao = document.getElementById("nova_descricao").value;

    if (novoNome) {
        document.querySelector("#box_img_name h2").textContent = novoNome;
        localStorage.setItem('name', novoNome);
    }
    if (novaDescricao) {
        document.querySelector("#box_descricao p").textContent = novaDescricao;
        localStorage.setItem('descricao', novaDescricao);
    }
    if (selectedAvatar) {
        document.querySelector("#img_perfil img").src = selectedAvatar;
        localStorage.setItem('avatar', selectedAvatar);
    }

    modal.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
    var name = localStorage.getItem('name');
    var descricao = localStorage.getItem('descricao');
    var avatar = localStorage.getItem('avatar');

    if (name) {
        document.querySelector("#box_img_name h2").textContent = name;
    }
    if (descricao) {
        document.querySelector("#box_descricao p").textContent = descricao;
    }
    if (avatar) {
        document.querySelector("#img_perfil img").src = avatar;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var btnSair = document.getElementById('sair');

    btnSair.addEventListener('click', function() {
        localStorage.removeItem('name');
        localStorage.removeItem('avatar');
        localStorage.removeItem('descricao');
        window.location.href = 'login.html';
    });
});