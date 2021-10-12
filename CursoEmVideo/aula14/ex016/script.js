function calcular() {
    let nIni = window.document.getElementById('ini');
    let nFim = window.document.getElementById('fim');
    let nPasso = window.document.getElementById('passo');
    let resultado = window.document.getElementById('res');

    if (nIni.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0) {
        window.alert('[ERRO] - Entre com dados válidos');
        resultado.innerHTML = `Não foi possível realizar: `;
    } else {
        resultado.innerHTML = `Contando: `;
        let i = Number.parseInt(nIni.value);
        let f = Number.parseInt(nFim.value);
        let p = Number.parseInt(nPasso.value);
        if (p <= 0) {
            window.alert('[ERRO] Passo inválido! Será considerado valor 1');
            p = 1;
        }
        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `\u{1F449}${c}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) { //contagem decrescente
                resultado.innerHTML += `\u{1F449}${c}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }

}