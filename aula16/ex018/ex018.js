let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#fLista')
let res = document.querySelector('div#resultado')
let valores = []

//Verifica se o parametro n está entre 1 e 100
function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Verifica se a lista contém o parâmetro passado
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // o -1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

//Adiciona o número passado como parâmetro caso passe na verificação
function adicionar() {
    if(isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //Pondo o valor recebido pelo input dentro do vetor
        let item = document.createElement('option') //crio a tag dentro do select
        item.text = `Valor ${num.value} adicionado a lista.` //Dando um texto para a tag criada acima
        lista.appendChild(item) //Inserindo o texto criado acima dentro da lista
        res.innerHTML = '' //Zera a mensagem da DIV "resultado" quando o botao adicionar for acionado. 
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //Zera o input no HTML
    num.focus() //Ao apertar o botão de enviar a submissão o cursor não sairá da caixa de input
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let media = soma / total
        res.innerHTML += ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número inserido foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número inserido foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números inseridos foi ${soma}.</p>`
        res.innerHTML += `<p>A média dos números inseridos foi ${media}.</p>`
    }
}