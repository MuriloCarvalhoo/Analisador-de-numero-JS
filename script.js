var tab = document.querySelector("select#selTab")
var res = document.querySelector("div#res")
var num = document.querySelector("input#txtn")  
var valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {        
        return false
}

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {      
       if(isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `O valor ${num.value} foi adicionado ao vetor ${valores.length}`
            tab.appendChild(item)
            res.innerHTML = ''
       } else {
           window.alert('Valor inválido ou já encontrado na lista')
       }
       num,value = ''
       num.focus()
}


    // VAR POS PROCESSAMENTO 
    //valores.sort();

    



function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
    var total = valores.reduce((total, numero) => total + numero, 0);
    var media = valores.reduce((total, numero) => total + numero, 0)/valores.length;

    Array.min = function(array) {
        return Math.min.apply(Math, array) ;
    };

    Array.max = function(array) {
        return Math.max.apply(Math, array);
    };

    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.`+ '<br>'
    res.innerHTML += `O maior valor informado foi ${Array.max(valores)}`+ '<br>'
    res.innerHTML += `O menor valor informado foi ${Array.min(valores)}`+ '<br>'
    res.innerHTML += `Somando todos os valores, temos ${total}`+ '<br>'
    res.innerHTML += `A média dos valores digitados é ${media}`+ '<br>'
    };
}

function zerar() {
tab.innerHTML = ''
res.innerHTML = ''
num.innerHTML = ''
}

