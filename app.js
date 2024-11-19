alert('Boas Vindas ao Jogo do Número Secreto.');

let numeroSecreto = 29;
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 30');

    if (chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}!`);
        }else{
            alert(`O número secreto é maior que ${chute}!`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);