# Desafio \o/

## Algumas considerações iniciais
* 3 - Intervalo de Números: 
foi considerada uma lista de números, agrupando-os com seus sucessores diretos no array.

* 4 - Troco: 
foi considerado que a entrada do usuário não será um número que envolva centavos abaixo de 5, por não existir regra para a mesma.

# Como configurar o ambiente?

## Configuração

* Instalar, caso não possua o [Node.js](https://nodejs.org/en/) com npm
* Para verificar a instalação execute no terminal do seu sistema: 
`node -v`
e
`npm -v`
ambos devem mostrar um número de versão.

# Instalação de dependências
No prompt de comando do seu sistema, navegue até a pasta que contém o package.json e utilize o npm para instalar as dependências.
`npm install`

# Utilização
## 1 - Decode URL
`npm run 1`

**Exemplos de entrada**
`https://globoesporte.globo.com/`
`http://www.google.com/mail/user=fulano`
`ssh://fulano%senha@git.com/`

## 3 - Intervalo de Números
`npm run 3`

**Exemplos de entrada**
`100,101,102,103,104,105,110,111,113,114,115,150`
`1,2,3,5,6,11,12,13,100,101`

## 4 - Troco
`npm run 4`

**Exemplos de entrada**
`1. Valor	a	ser	pago:	4,05`
`2. Valor efetivamente pago: 40,00`

`1. Valor a ser pago: 20,00`
`2. Valor efetivamente pago: 40,00`