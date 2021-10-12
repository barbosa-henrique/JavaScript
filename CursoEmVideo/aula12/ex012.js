var agora = new Date() //como se fosse o sysdate do SQL
var hora = agora.getHours()
console.log(`Hora atual é ${hora}`)
if (hora < 6) {
    console.log('É madrugada')
} else if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}