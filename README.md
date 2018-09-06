# Conversor de Números Romanos v.1.0.2

Essa biblioteca se destina a converter Números Romanos em Números Inteiros, e Números Inteiros em Números Romanos, para uso em aplicações na Web. A versão atual é capaz de converter números entre 1 e 3999.

## Os métodos utilizados na biblioteca são: 

Para converter Inteiros em Romanos

**intToRoman(num)**

Exemplo de uso:

```
$node 
> let convertToRoman = require('intToRoman')
> convertToRoman(15); //'XV'
``` 

Para converter Romanos em Inteiros 

**romanToInt('string')**

Exemplo de uso:

```
$node 
> let convertToInt = require('romanToInt')
> convertToInt('XXVIII'); //28
``` 

## versão 1.0.0  

- Funcionalidades: converte  números inteiros em romanos, e romanos em inteiros, entre 1 e 3999
- Conversão com texto em letra maiúscula e números inteiros. 

## instalação

- Você deverá ter o node e o npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- Proceda com a instalação com `$npm install bl-intandroman`

## roadmap oficial do projeto  

### versão 3.0.0 (sem previsão)
- Aceitar números maiores que 3999

### versão 2.0.0 (previsão setembro/2018)
- Tratamento de letras minúsculas, para funcionar como números romanos 

### versão 1.0.0 (realesed)
- Funcionalidades: converte  números inteiros em romanos, e romanos em inteiros, entre 1 e 3999
- Conversão com texto em letra maiúscula e números inteiros. 
