function tabuada() {
    let num = document.getElementById('txtNumber')
    let tab = document.getElementById('selTab')

    if(num.value.length == 0) {
        window.alert('Digite algo para fazer uma tabuada')
    } else {
        let n = Number(num.value)
        let contador = 1
        tab.innerHTML = '' //para limpar o select
        while(contador <= 10) {
            let item = document.createElement('option') //Create element cria um elemento HTML
            item.text = `${n} x ${contador} = ${n*contador}`
            tab.appendChild(item)
            contador++
        }
    }
}