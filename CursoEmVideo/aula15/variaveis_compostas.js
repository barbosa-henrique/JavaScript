let num = [5,8,4];
console.log(num);
num[3] = 6; //insere o valor 6 na quarta posição do vetor. Como essa posição não existe, ela será criada automáticamente
num.push(7); //independente de qual seja a última posição do vetor, será criado uma nova última e inserido nela o valor 7
num.sort(); //ordena o vetor em ordem crescente
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log('\n ===== For padrão =====')
for (i = 0 ; i < num.length ; i++) {
    console.log(`Posição ${i} do vetor tem o valor ${num[i]}`);
}

console.log('\n ===== For exclusivo para variáveis compostas =====')
for (let pos in num) {
    console.log(`Posição ${pos} do vetor tem o valor ${num[pos]}`);
}

console.log('\nPosição em que está o elemento 6');
let onde = num.indexOf(6);
if (onde == -1) {
    console.log('O valor não foi encontrado no vetor');
} else {
    console.log(`O valor está na posição ${onde}`)
}
