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

        var genero = ''
        if(formSex[0].checked) {
            genero = 'Masculino'
        } else if(formSex[1].checked) {
            genero = 'Feminino'
        }

        res.style.textAlign = 'center' //Texto alinhado através de Javascript
        res.innerHTML = `Identificamos o gênero ${genero} com idade aproximada de ${idade}` //"id de uma DIV + innerHTML -> Muda o valor do HTML de dentro da DIV"
        
         
    }

    //testetesteste

}