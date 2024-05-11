var modal = document.getElementById('modal_editar');
var btnEditar = document.getElementById("editar");
var btnFechar = document.getElementsByClassName("close")[0];
var btnAlterar = document.getElementById("fazer_alteracao");

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

btnAlterar.onclick = function() {
    var novoNome = document.getElementById("novo_nome").value;
    var novaDescricao = document.getElementById("nova_descricao").value;

    document.querySelector("#box_img_name h2").textContent = novoNome;
    document.querySelector("#box_descricao p").textContent = novaDescricao;

    modal.style.display = "none";
}