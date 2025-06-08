-------------------------------

## Documentação do Projeto de Autenticação Web com API

Este documento tem como objetivo apresentar a estrutura e o funcionamento de um sistema de autenticação web, desenvolvido para interagir com uma API externa. O projeto visa demonstrar a integração de um frontend construído com HTML, CSS e JavaScript puro, com serviços de autenticação e registro de usuários.

-------------------------------

### Visão Geral e Componentes Principais

O projeto é composto por três arquivos HTML para as interfaces de usuário, um arquivo CSS para a estilização e um arquivo JavaScript para a lógica de comunicação com a API:

* **`index.html`**: Representa a página de login, permitindo que usuários existentes acessem o sistema.
* **`telaCadastro.html`**: Corresponde à página de registro, onde novos usuários podem criar suas contas.
* **`telaBemVindo.html`**: É a página de boas-vindas, exibida após uma autenticação bem-sucedida, apresentando informações do usuário logado.
* **`Css/style.css`**: Contém as definições de estilo e layout aplicadas a todas as páginas HTML do projeto.
* **`Js/script.js`**: Implementa a lógica de manipulação de formulários e a comunicação assíncrona com a API de autenticação.

-------------------------------

### Funcionalidades e Fluxo de Operação

As principais funcionalidades implementadas e seu fluxo de operação são detalhados a seguir:

1.  **Autenticação de Usuário (`index.html`)**:
    * Um formulário solicita o e-mail e a senha do usuário.
    * Ao submeter o formulário, os dados são enviados via requisição `POST` para o endpoint de autenticação da API.
    * Em caso de sucesso, o token de autenticação e a data de expiração são armazenados no `localStorage` do navegador, e o usuário é redirecionado para a página `telaBemVindo.html`.
    * Em caso de falha na autenticação, uma mensagem de erro é exibida na interface.

2.  **Registro de Usuário (`telaCadastro.html`)**:
    * Um formulário requer e-mail, senha e confirmação de senha.
    * É realizada uma validação local para verificar se as senhas digitadas coincidem.
    * Os dados são enviados via requisição `POST` para o endpoint de registro da API.
    * Após um registro bem-sucedido, uma notificação de sucesso é exibida e o usuário é redirecionado para a página `index.html` (login).
    * Em caso de erro no registro, uma mensagem informativa é apresentada.

3.  **Visualização de Dados do Usuário (`telaBemVindo.html`)**:
    * Esta página recupera o e-mail e a data de expiração do token de autenticação armazenados no `localStorage`.
    * As informações são exibidas ao usuário.
    * Um link "Sair" permite que o usuário retorne à página de login, efetuando o logout simbólico (não há um endpoint de logout explícito, mas o retorno à página de login remove o contexto de "logado").

-------------------------------

### Estrutura e Organização dos Arquivos

A organização dos arquivos no projeto segue a seguinte estrutura:

* `index.html`
* `telaCadastro.html`
* `telaBemVindo.html`
* `Css/`
    * `style.css`
* `Js/`
    * `script.js`

-------------------------------

### Orientações para Ajustes e Modificações

Para realizar customizações ou adaptar o projeto, considere os seguintes pontos:

* **Endpoints da API**: As URLs dos serviços de autenticação e registro estão definidas no arquivo `Js/script.js`. Para integrar o projeto com uma API diferente, é necessário modificar essas URLs.
* **Estilização Visual**: O arquivo `Css/style.css` é o ponto central para quaisquer alterações de design, layout, cores e tipografia da interface.
* **Mensagens de Feedback**: As mensagens de sucesso e erro apresentadas ao usuário são controladas no arquivo `Js/script.js` e podem ser ajustadas conforme a necessidade.

-------------------------------

### Acesso ao Projeto Implantado

O projeto foi implantado na plataforma Vercel e está acessível publicamente através do seguinte endereço:

**URL de Acesso:** [https://conexao-com-api.vercel.app/](https://conexao-com-api.vercel.app/)

-------------------------------
