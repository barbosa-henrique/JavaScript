function gera_tabuada() {
    let numero = window.document.querySelector('input#fator');
    //let resultado = window.document.querySelector('div#res');
    let tab = window.document.getElementById('seltab');
    if (numero.value.length == 0) {
        window.alert('Informe um número para a tabuada');
    } else {
        //resultado.innerHTML = null;
        let tabuada = Number.parseInt(numero.value);
        tab.innerHTML = null;
        for (let c = 1 ; c <= 10 ; c++ ) {
            let item = document.createElement('option');
            item.text = `${c} x ${tabuada} = ${c * tabuada}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            //resultado.innerHTML += `${c} x ${tabuada} = ${c * tabuada} <br>`;
        }
        //resultado.innerHTML = 'OK'
    }
}
/*
primeiro que fiz, sem o select html
function gera_tabuada() {
    let numero = window.document.querySelector('input#fator');
    let resultado = window.document.querySelector('div#res');
    if (numero.value.length == 0) {
        window.alert('Informe um número para a tabuada');
    } else {
        resultado.innerHTML = null;
        let tabuada = Number.parseInt(numero.value);
        for (let c = 1 ; c <= 10 ; c++ ) {
            resultado.innerHTML += `${c} x ${tabuada} = ${c * tabuada} <br>`;
        }
        //resultado.innerHTML = 'OK'
    }
}*/