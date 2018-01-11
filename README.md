# \<detetive-app\>

Jogo de Detetive

## Pasta Build

Utilize um servidor de arquivos estaticos em qualquer uma das pastas dentro da pasta de build para executar o projeto


## Buildando a Aplicação

```
$ npm install -g polymer-cli
$ npm update
$ bower update
$ polymer build
```

## Sobre

O projeto foi desenvolvido utilizando ES6, as bibliotecas Polymer e Redux e técnicas de PWA.

A escolha do ES6 foi para poder utilizar a API de classes, mantendo um código mais limpo, legível
   e com a possibilidade de utilização de herança de classes, além disso, acesso a Arrow Functions
   pela sua facilidade em criar trechos de tecnicas de codigo funcional, além de permitir acesso ao this
   do contexto no qual a função está inserida, reduzindo assim work arounds e linhas extras de código
   e por fim a utilização de Fetch para realizar chamadas HTTP de maneira limpa e assincrona.

A utilização da biblioteca Polymer foi pela sua facilidade em criar e utilizar web components, além
   de fornecer métodos de configuração e build de projeto utilizando gulp.

A biblioteca Redux foi utilizada para criar uma arquitetura de estado da aplicação de forma a simplificar a
   criação, organização, alteração e manutenção da aplicação, além de manter seu estado de forma imutável
   à possíveis efeitos colaterais.

As técnicas de PWA foram utilizadas para manter a velocidade de apresentação da aplicação,
   esperando assim a satisfação do usuário na sua utilização;
