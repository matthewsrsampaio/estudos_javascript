function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtAno')
    var res = document.querySelector('div#res') //so pra fazer diferente, poderia ter sido feito com o id.

    if(formularioAno.value.length == 0 || formularioAno.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var formSex = document.getElementsByName('radioSexo')
        var idade = ano - Number(formularioAno.value)
        var img = document.createElement('img') //cria uma tag dinamicamente no html atraves de javascript
        img.setAttribute('id', 'foto') //seta o id da tag criada. Neste caso o id escolhido é foto
        var genero = ''

        if(formSex[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 3){
                //baby
                img.setAttribute('src', 'babyBoy.jpg')
            } else if(idade < 11) {
                //boy
                img.setAttribute('src', 'boy.jpg')
            } else if(idade < 20) {
                //teen boy
                img.setAttribute('src', 'teenBoy.jpg')
            } else if(idade < 50) {
                //man
                img.setAttribute('src', 'man.jpg')
            } else {
                //old man
                img.setAttribute('src', 'oldMan.jpg')
            }
        } else if(formSex[1].checked) {
            genero = 'Feminino'
            if(idade >= 0 && idade < 3){
                //baby
                img.setAttribute('src', 'babyGirl.jpg')
            } else if(idade < 11) {
                //girl
                img.setAttribute('src', 'girl.jpg')
            } else if(idade < 20) {
                //teen girl
                img.setAttribute('src', 'teenGirl.jpg')
            } else if(idade < 50) {
                //woman
                img.setAttribute('src', 'woman.jpg')
            } else {
                //old woman
                img.setAttribute('src', 'oldWoman.jpg')
            }
        }

        res.style.textAlign = 'center' //Texto alinhado através de Javascript
        res.innerHTML = `Identificamos o gênero ${genero} com idade aproximada de ${idade}` //"id de uma DIV + innerHTML -> Muda o valor do HTML de dentro da DIV"
        res.appendChild(img)
         
    }

}