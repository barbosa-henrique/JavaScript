let num = window.document.querySelector('input#numero')
let tab = window.document.querySelector('select#tabanalise')
let res = window.document.querySelector('div#res')
let sequencia = []

function isNumero(n) {
    if (Number.parseInt(n) > 0 && Number.parseInt(n) < 101) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number.parseInt(n)) != -1) {
        return true
    } else {
        return false
    }
}

function analisar() {
    if (isNumero(num.value) && !inLista(num.value, sequencia)) {
        //window.alert('teste')
        let informado = Number.parseInt(num.value)
        let item = document.createElement('option')

        sequencia.push(informado)

        item.text = `Valor ${informado} adicionado`
        item.value = `tab${informado}`
        tab.appendChild(item)
        
        res.innerHTML = ''
        console.log(sequencia)
    } else {
        window.alert(`Informe um número para analisarmos <br>'Número' atual ${num.value}<br>'Sequencia' atual${sequencia} `)
    }

}

function encerrar() {
    if (sequencia.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        res.innerHTML = ''
        let maximo = sequencia[0]
        let minimo = sequencia[0]
        let soma = 0;
        let qtd = Number.parseInt(sequencia.length)
        let media = 0;
        /*for (let i = 0; i <= qtd; i++) {
            soma = soma + Number.parseInt(sequencia[i])
            console.log(soma)
        }
        for (let pos in sequencia){
            soma += sequencia[pos]
        }
        for (let pos in sequencia) {
            if (sequencia[pos] > maximo) {
                maximo = sequencia[pos]
            }
        }
        for (let pos in sequencia) {
            if (sequencia[pos] < minimo) {
                minimo = sequencia[pos]
            }
        }*///esses IF foram todos unificados
        for (let pos in sequencia) {
            soma += sequencia[pos]
            if (sequencia[pos] > maximo) {
                maximo = sequencia[pos]
            }
            if (sequencia[pos] < minimo) {
                minimo = sequencia[pos]
            }
        }
        media = soma / qtd
        res.innerHTML = `<br>Ao todo, temos ${qtd} números cadastrados;<br>
                     <br>O maior valor informado foi ${maximo};<br>
                     <br>O menor valor informado foi ${minimo};<br>
                     <br>Somando todos os valores, temos ${soma};<br>
                     <br>A média dos valores digitados é ${media};<br>`
        console.log(soma)

    }

}