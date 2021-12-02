const jokenpo = document.querySelector(".usuario > img")
const cpuJogada = document.querySelector(".cpu > img")
const resultadoTela = document.querySelector(".resultado > p")
const nome = document.querySelector(".cpu > p")
const botaoJogar = document.querySelector(".jogar")

let usuario = 1
jokenpo.onclick = (e) => {
    // Imagem da jogada do usuario
    // Verificando qual e a imagem atual
    let estado = jokenpo.getAttribute("src") 

    // comparando a imagem atual para cada clique mudar a imagem
    if (estado == "./imagens/pedra.png"){
        // Alterando imagem
        jokenpo.setAttribute("src", "./imagens/papel.png")
        jokenpo.setAttribute("alt", "papel")
        // usando numeros para representar pedra, papel ou tesoura
        usuario = 2
    }
    
    else if (estado == "./imagens/papel.png") {
        jokenpo.setAttribute("src", "./imagens/tesoura.png")
        jokenpo.setAttribute("alt", "tesoura")
        usuario = 3
    }
    
    else {
        jokenpo.setAttribute("src", "./imagens/pedra.png")
        jokenpo.setAttribute("alt", "pedra")
        usuario = 1
    }
    // Escondendo a cada clique a jogada da cpu
    cpuJogada.style.display = "none"
    // Escondendo o resultado a cada clique para selecionar a jogada
    resultadoTela.innerHTML = ""
    // Escondendo a legenda que fala que a jogada e da Cpu
    nome.innerHTML = ""
}



botaoJogar.onclick = (e) => {
    // Mostrando o nome do outro jogador
    nome.innerHTML = "Cpu"
    // Gerando numero aleatorio de 1 a 3 para representar a jogada da cpu
    let cpu = Math.floor( (Math.random() * 3) + 1)
    // Captando o resultado
    let resultado = ''
    
    // Comparando as jogadas para emitir o resultado
    if (usuario == cpu) {
        resultado = "Empate"
    }
    
    else {
        if (usuario == 2 && cpu == 1) {
            resultado = "Você Ganhou"
        } else if(usuario == 3 && cpu == 2) {
            resultado = "Você Ganhou"
        } else if (usuario == 1 && cpu == 3) {
            resultado = "Você Ganhou"
        } else{
            resultado = "Você Perdeu"
        }
    }
    // Adicionando resultado a tela
    resultadoTela.innerHTML = resultado

    // Definido imagem dependo da jogada da cpu
    if (cpu == 2){
        cpuJogada.setAttribute("src", "./imagens/papel.png")
        cpuJogada.setAttribute("alt", "papel")
    }
    
    else if (cpu == 3) {
        cpuJogada.setAttribute("src", "./imagens/tesoura.png")
        cpuJogada.setAttribute("alt", "tesoura")
    }
    
    else if (cpu == 1) {
        cpuJogada.setAttribute("src", "./imagens/pedra.png")
        cpuJogada.setAttribute("alt", "pedra")
    }

    // Mostrando a imagem da jogada da cpu
    cpuJogada.style.display = "block"
}