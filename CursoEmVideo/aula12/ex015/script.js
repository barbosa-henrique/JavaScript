function calcular(){
    let data = new Date();
    let anoAtu = data.getFullYear();
    let nasc = window.document.getElementById('ano').value;
    let idade = anoAtu - nasc;
    let res = window.document.getElementById('res');
    let sexo = window.document.getElementsByName('sex');

    if (nasc == 0 || nasc > anoAtu) {
        window.alert('[ERRO] - Dados incorrentos, tente novamente!')
    } else if (sexo[0].checked) { //[0] homem [1] mulher
        res.innerHTML = `Detectamos Homem com ${idade} anos`
        res.style.textAlign = 'center'
        } else {
            res.innerHTML = `Detectamos Mulher com ${idade} anos`
            res.style.textAlign = 'center'
        }
    }
