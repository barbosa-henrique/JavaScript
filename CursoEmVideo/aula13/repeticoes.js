console.log('=== WHILE ===');
let contador = 1;
while (contador < 6) {
    console.log(`Passo ${contador}`);
    contador++;
};

console.log('');
console.log('=== DO WHILE ===');
contador = 1;
do {
    console.log(`Passo ${contador}`);
    contador++;
} while (contador < 6);

console.log('');
console.log('=== FOR ===');
for(let c = 1; c < 6; c++) {
    console.log(`Passo ${c}`);
}