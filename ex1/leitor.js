var readline = require('readline');

var calculadora = require('./calculadora');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Insira a operação desejada: \n1) Soma\n2) Subtracao\n3) Multiplicacao\n4) Divisao\n', function(res) {
    res = Number(res);

    if (res && res > 0 && res <= 4) {
        leitor.question("Insira o primeiro número:\n", function(answer) {
            if (answer) {
                var first = answer;
                leitor.question("Insira o segundo número:\n", function(sec) {
                    if (sec) {
                        var sec = sec;
                        first = Number(first);
                        sec = Number(sec)
                        if (res == 1) {
                            console.log('Resposta', calculadora.soma(first, sec));
                            leitor.close();
                        } else if (res == 2) {
                            console.log('Resposta', calculadora.subtracao(first, sec));
                            leitor.close();
                        } else if (res ==3) {
                            console.log('Resposta', calculadora.multiplicacao(first, sec));
                            leitor.close();
                        } else if (res == 4) {
                            console.log('Resposta', calculadora.divisao(first, sec));
                            leitor.close();
                        }
                    } else {
                        console.log('Numero inválido');
                        leitor.close();
                    }
                });
            } else { 
                console.log('Numero inválido')
                leitor.close();
            };
        });
    } else { 
        console.log('Opção inválida');
        leitor.close();
    }
});