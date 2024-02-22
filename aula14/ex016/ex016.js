function contar() {
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('response')

    if(inicio.value.length == 0 || fim.value.length == 0) {
        // window.alert('[ERRO] Faltam Dados!')   
        res.innerHTML = 'Impossível contar porque faltam dados.'     
    } else {
        res.innerHTML = 'Contando...'
        //os numeros obtidos no DOM virão como texto, por isso eu os converto logo abaixo.
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        if(pas == 0) {
            window.alert('Passo Inválido. Consideraremos o passo como 1')
            pas = 1
        }
        if(ini < fi) {
            //Contagem CRESCENTE
            for(let c = ini; c <= fi; c += pas) {
                //Os emojis podem ser encontrados no site da  UNICODE. Pesquise por: Unicode emoji list
                res.innerHTML += `${c} \u{1F449}	` //Formato para inserir emojis: \u{numeroDoEmoji}
            }
        } else {
            //Contagem DECRESCENTE
            for(let c = ini; c >= fi; c -= pas) {
                //Aqui se o inicio for maior que o fim, iremos contas de forma regressiva
                res.innerHTML += `${c} \u{1F605}`
            }            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}