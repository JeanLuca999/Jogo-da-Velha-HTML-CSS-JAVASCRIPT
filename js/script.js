var vezDoJogador = 1 //jogador 1 = 1, jogador 2 = 0
var jogador1Pontos = 0
var jogador2Pontos = 0
var fimDeRodada = 0
var Empates = 0

var l1c1 = document.getElementById('l1c1') // l = linha, c = coluna
var l1c2 = document.getElementById('l1c2')
var l1c3 = document.getElementById('l1c3')

var l2c1 = document.getElementById('l2c1')
var l2c2 = document.getElementById('l2c2')
var l2c3 = document.getElementById('l2c3')

var l3c1 = document.getElementById('l3c1')
var l3c2 = document.getElementById('l3c2')
var l3c3 = document.getElementById('l3c3')

function clicou(elemento){
    var quadrado = document.getElementById(elemento)
    if(vezDoJogador == 1 && quadrado.innerText == '' && fimDeRodada == 0){
        quadrado.innerText = 'X'
        quadrado.style.color = 'red'
        vezDoJogador = 0
       
        if(l1c1.innerText == 'X' && l1c2.innerText == 'X' && l1c3.innerText == 'X'){
            //verificacao linha 1
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l2c1.innerText == 'X' && l2c2.innerText == 'X' && l2c3.innerText == 'X'){
            //verificacao linha 2
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l3c1.innerText == 'X' && l3c2.innerText == 'X' && l3c3.innerText == 'X'){
            //verificacao linha 3
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l1c1.innerText == 'X' && l2c2.innerText == 'X' && l3c3.innerText == 'X'){
            //verificacao diagonal principal
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l1c3.innerText == 'X' && l2c2.innerText == 'X' && l3c1.innerText == 'X'){
            //verificacao diagonal secundaria
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l1c1.innerText == 'X' && l2c1.innerText == 'X' && l3c1.innerText == 'X'){
            //verificacao coluna 1
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l1c2.innerText == 'X' && l2c2.innerText == 'X' && l3c2.innerText == 'X'){
            //verificacao coluna 2
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }
        else if(l1c3.innerText == 'X' && l2c3.innerText == 'X' && l3c3.innerText == 'X'){
            //verificacao coluna 3
            jogador1Pontos += 1
            document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
            fimDeRodada = 1
        }

    }
    else if(vezDoJogador == 0 && quadrado.innerText == '' && fimDeRodada == 0){
        quadrado.innerText = 'O'
        quadrado.style.color = 'blue'
        vezDoJogador = 1

        if(l1c1.innerText == 'O' && l1c2.innerText == 'O' && l1c3.innerText == 'O'){
            //verificacao linha 1
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l2c1.innerText == 'O' && l2c2.innerText == 'O' && l2c3.innerText == 'O'){
            //verificacao linha 2
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l3c1.innerText == 'O' && l3c2.innerText == 'O' && l3c3.innerText == 'O'){
            //verificacao linha 3
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l1c1.innerText == 'O' && l2c2.innerText == 'O' && l3c3.innerText == 'O'){
            //verificacao diagonal principal
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l1c3.innerText == 'O' && l2c2.innerText == 'O' && l3c1.innerText == 'O'){
            //verificacao diagonal secundaria
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l1c1.innerText == 'O' && l2c1.innerText == 'O' && l3c1.innerText == 'O'){
            //verificacao coluna 1
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l1c2.innerText == 'O' && l2c2.innerText == 'O' && l3c2.innerText == 'O'){
            //verificacao coluna 2
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }
        else if(l1c3.innerText == 'O' && l2c3.innerText == 'O' && l3c3.innerText == 'O'){
            //verificacao coluna 3
            jogador2Pontos += 1
            document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`
            fimDeRodada = 1
        }

    }
    else if(fimDeRodada == 0 && verificaEmpate()){
        window.alert('Empate, clique em Resetar')
    }
    else if(fimDeRodada == 1){
        window.alert('Fim da rodada, clique em Resetar')
    }
}

function verificaEmpate(){
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            if(document.getElementById(`l${i}c${j}`).innerText == ''){
                return false
                //se pelo menos um campo estiver vazio, significa que nao houve empate
            }
        }
    }
    fimDeRodada = 1 //quando ocorre o empate a rodada deve ser resetada
    Empates += 1
    return true
}

function resetarCampos(){
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            document.getElementById(`l${i}c${j}`).innerText = ''
        }
    }

    document.getElementById(`empate`).innerText = `Empate(s): ${Empates}`
    vezDoJogador = 1
    fimDeRodada = 0
}

function resetarPontos(){
    Empates = 0
    jogador1Pontos = 0
    jogador2Pontos = 0
    vezDoJogador = 1
    fimDeRodada = 0

    document.getElementById('empate').innerText = `Empate(s): ${Empates}`
    document.getElementById('jogador1').innerText = `X - Jogador 1: ${jogador1Pontos}`
    document.getElementById('jogador2').innerText = `O - Jogador 2: ${jogador2Pontos}`

    for(let i = 1; i <= 3; i++){
        for(let j = 1; j<= 3; j++){
            document.getElementById(`l${i}c${j}`).innerText = ''
        }
    }
}
