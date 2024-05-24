var curtiu = false;

function Curtir() {
    var curtir = document.getElementById('curtir');
    var curtidas = document.getElementById('num_curtidas');

    var ctd = parseInt(curtidas.textContent.replace('.', '').replace(' mil', ''));

    if (!curtiu) {
        curtir.style.background = 'rgba(161, 161, 161, 0.438)';
        curtidas.textContent = formatarNumero(ctd + 1);
        curtiu = true;
    }else if(curtiu == true){
        curtir.style.background = 'transparent';
        curtidas.textContent = formatarNumero(ctd - 1);
        curtiu = false;
    }
}

function formatarNumero(num) {
    if (num >= 1000) {
        return (num / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 3 }).replace(',', '.') + ' mil';
    }
    return num.toLocaleString('pt-BR');
}