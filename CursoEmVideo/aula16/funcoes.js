function par_impar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(par_impar(10));

function soma(n1=0,n2=0) { //valores default do parâmetro é 0
    return n1 + n2;
}
console.log(soma(2,6));

function fatorial1(num) { //recursividade
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1);
    }
}

function fatorial2(num) { //método mais simples
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}