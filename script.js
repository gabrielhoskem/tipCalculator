var valorconta = document.querySelector(".valorconta")

valorconta.addEventListener("blur", (a) => {
    var valor1 = document.querySelector(".valor1")
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
})

//! -----------------------TABELA DE PORCENTAGEM---------------

function porcentagem5() {
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
    var resul = valorcontaN * 5 / 100
    var valor1 = document.querySelector(".valor1")
    valor1.innerHTML = parseInt(resul)
}
var p5 = document.querySelector("#a5")
p5.addEventListener("click", (b) => {
    porcentagem5()
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        el.classList.remove("liselecionado")
    })
    p5.classList.add("liselecionado")
})

function porcentagem10() {
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
    var resul = valorcontaN * 10 / 100
    var valor1 = document.querySelector(".valor1")
    valor1.innerHTML = parseInt(resul)
}
var p10 = document.querySelector("#a10")
p10.addEventListener("click", (b) => {
    porcentagem10()
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        el.classList.remove("liselecionado")
    })
    p10.classList.add("liselecionado")
})

function porcentagem15() {
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
    var resul = valorcontaN * 15 / 100
    var valor1 = document.querySelector(".valor1")
    valor1.innerHTML = parseInt(resul)
}
var p15 = document.querySelector("#a15")
p15.addEventListener("click", (b) => {
    porcentagem15()
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        el.classList.remove("liselecionado")
    })
    p15.classList.add("liselecionado")
})

function porcentagem25() {
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
    var resul = valorcontaN * 25 / 100
    var valor1 = document.querySelector(".valor1")
    valor1.innerHTML = parseInt(resul)
}
var p25 = document.querySelector("#a25")
p25.addEventListener("click", (b) => {
    porcentagem25()
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        el.classList.remove("liselecionado")
    })
    p25.classList.add("liselecionado")
})

function porcentagem50() {
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
    var resul = valorcontaN * 50 / 100
    var valor1 = document.querySelector(".valor1")
    valor1.innerHTML = parseInt(resul)
}
var p50 = document.querySelector("#a50")
p50.addEventListener("click", (b) => {
    porcentagem50()
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        el.classList.remove("liselecionado")
    })
    p50.classList.add("liselecionado")
})

//! -----------------------TABELA DE PORCENTAGEM---------------


//! -----------------------PORCENTAGEM CUSTOM------------------

var porcentagemcustom = document.querySelector(".porcentagemcustom")
porcentagemcustom.addEventListener("focus", (removeselecao) => {
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        if (el.classList.contains("liselecionado") == true) {
            el.classList.remove("liselecionado")
        }
    })
})

porcentagemcustom.addEventListener("blur", (b) => {
    var x = porcentagemcustom.value
    var y = Number(x)
    var valor1 = document.querySelector(".valor1")
    var valorcontaR = valorconta.value
    var valorcontaN = Number(valorcontaR)
    valor1.innerHTML = parseInt((y / 100) * valorcontaN)
})
//! -----------------------PORCENTAGEM CUSTOM------------------

var ndepessoas = document.querySelector(".numerodepessoas")
ndepessoas.addEventListener("blur", (b) => {
    var ndp = Number(ndepessoas.value) //! RETORNA OK
    var valor1 = document.querySelector(".valor1") //! RETORNA OK
    var valorcontaNumero = Number(valorconta.value) //! RETORNA OK
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros] //! RETORNA OK - NODELIST
    todosOsOutrosA.map((el) => { //! RETORNA OK - ITEM POR ITEM
        if (el.classList.contains("liselecionado") == true) { //! EL RETORNA O EL SELECIONADO OK
            valor1.innerHTML = (valorcontaNumero * (el.value) / 100) / ndp
            var valorTotal = document.querySelector(".valor2")
            valorTotal.innerHTML = (valorcontaNumero + (valorcontaNumero * el.value / 100)) / ndp

        } else {
            var x = porcentagemcustom.value
            var y = Number(x)
            valor1.innerHTML = (valorcontaNumero * y / 100) / ndp
        }
    })
})

//! ___________________________________BOTAO RESET________________
var btn = document.querySelector("button")
btn.addEventListener("click", (zeraTudo) => {
    valorconta.value = 0
    var todosOsOutros = document.querySelectorAll("li")
    var todosOsOutrosA = [...todosOsOutros]
    todosOsOutrosA.map((el) => {
        el.classList.remove("liselecionado")
    })
    ndepessoas.value = 0
    porcentagemcustom.value = 0
    var valor1 = document.querySelector(".valor1")
    valor1.innerHTML = "$0.00"
    var valor2 = document.querySelector(".valor2")
    valor2.innerHTML = "$0.00"
})
