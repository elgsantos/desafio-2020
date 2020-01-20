# Desafio \o/

## Algumas considerações iniciais
* 3 - Intervalo de Números: 
foi considerada uma lista de números, agrupando-os com seus sucessores diretos no array.

* 4 - Troco: 
foi considerado que a entrada do usuário não será um número que envolva centavos abaixo de 5, por não existir regra para a mesma.

## Como configurar o ambiente?

### Configuração

* Instalar, caso não possua o [Node.js](https://nodejs.org/en/) com npm
* Para verificar a instalação execute no terminal do seu sistema: 
`node -v`
e
`npm -v`
ambos devem mostrar um número de versão.

## Instalação de dependências
No prompt de comando do seu sistema, navegue até a pasta que contém o package.json e utilize o npm para instalar as dependências.

`npm install`

## Utilização
### 1 - Decode URL
**Execute o comando**

`npm run 1`

**Exemplos de entrada**

`https://globoesporte.globo.com/`

`http://www.google.com/mail/user=fulano`

`ssh://fulano%senha@git.com/`

### 2 - Happy Number
**Execute o comando**

`npm run 2`

**Exemplos de entrada**

`49`
`97`
`130`
`10`

### 3 - Intervalo de Números
**Execute o comando**

`npm run 3`

**Exemplos de entrada**

`100,101,102,103,104,105,110,111,113,114,115,150`

`1,2,3,5,6,11,12,13,100,101`

### 4 - Troco
**Execute o comando**

`npm run 4`

**Exemplos de entrada**

`1. Valor	a	ser	pago:	4,05`

`2. Valor efetivamente pago: 40,00`

`1. Valor a ser pago: 20,00`

`2. Valor efetivamente pago: 40,00`

## 5.1 - Serviço de integração
O serviço deverá possuir 2 endpoints: um GET, para retornar um perfil aleatório; e um POST, para cadastrar um novo perfil.

### GET
O serviço deve possuir um endpoint para permitir uma requisição get, que retorna dados gerais de um perfil aleatório. 

A requisição deve receber os seguintes parâmetros:

`paises`

`idadeInicial`

`idadeFinal`

#### Validações
* Deverá ser validado se a request recebeu o parâmetro `paises`, e caso não tenha recebido, seja informado ao usuário. 
* Caso fornecido, deverá ser validado o parâmetro `idadeInicial`, um número **inteiro** no intervalo de 0 a 100
* Caso fornecido, deverá ser validado o parâmetro `idadeFinal`, um número **inteiro** no intervalo de 0 a 100

### POST
O serviço deve possuir um enpoint que permita salvar um novo usuário, com seu devido modelo  estrutural. 

Os campos enviados na requisição deverão ser os campos descritos na página da [API](https://randomprofile.com/pckgs/11-general/). Caso sejam utilizados nomes diferentes da API random profile, deverá ter estrutura equivalente. 

#### Validações
Deverão ser validados os campos descritos na página da [API](https://randomprofile.com/pckgs/11-general/). 

As validações incluem: formato, tipo, tamanho e valor dos atributos.

### Retry
Retentativa após um tempo estabelecido, para lidar com algum problemas de DNS ou outros da API acessada por esta. 

### Timeout
O timeout da aplicação deve ser configurável. 

### Tratamento de erros
Devem ser retornadas ao usuário mensagens específicas para exceções conhecidas. Como nos exemplos abaixo:

* Caso alguma validação falhe. 
* Caso a request resulte em timeout. 
* Caso resulte em erro de conexão ao serviço.

Também deverá ser tratado globalmente erros desconhecidos, de modo a não parar a aplicação

### 5.2 - API GET
Acesse o repositório abaixo para acessar a API e sua documentação:

[https://github.com/elgsantos/random-profile](https://github.com/elgsantos/random-profile)

## Autor
* **Eduardo Gomes** - [elgsantos](https://github.com/elgsantos/)