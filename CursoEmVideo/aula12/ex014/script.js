function carregar(){
    let msg = window.document.getElementById('msg');
    let imagem = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    //hora = 23;
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12){
        //BOM DIA
        imagem.scr = 'fotomanha.jpg'
        document.body.style.background = '#fffa61';
    } else if (hora > 12 && hora <= 18){
        //BOA TARDE
        imagem.src = 'fototarde.jpg'
        document.body.style.background = '#c2984f';
    } else {
        //BOA NOITE
        imagem.src = 'fotonoite.jpg'
        document.body.style.background = '#1a1933';
    }
}
