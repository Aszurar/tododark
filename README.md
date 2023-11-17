# #2 - React: **<https://tododark-aszurar.netlify.app>**

<div align="center">
    <img src="https://i.imgur.com/A9ywYDA.png" width="1000">
</div>

## todo dark

- O projeto **todo dark** é um site de lista de tarefas, com a possibilidade de adicionar, remover, marcar e persistir os dados de forma simples na web.
- A acessibilidade também foi levada em consideração, com o uso da lib axe-core para testes e correções de acessibilidade assim como leitor de tela ChromeVox.
- O site foi publicado com CI/CD por meio da plataforma **[Netlify](https://www.netlify.com/)**.
- Acesse em: **<https://tododark-aszurar.netlify.app>**

  <div align="center">
    <h3><a href="https://tododark-aszurar.netlify.app">todo dark</a></h3>
  </div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/d1883904-92e9-4862-b4c8-23883152c1bb/deploy-status)](https://app.netlify.com/sites/tododark-aszurar/deploys) [![React](https://img.shields.io/badge/-React-black?style=flat&logo=react&link=https://react.dev)](https://react.dev/) [![Vite](https://img.shields.io/badge/-Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white&link=https://vitejs.dev/)](https://vitejs.dev/) [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=?style=flat-square&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=flat&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=flat&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/)

</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center">
    <img src="https://i.imgur.com/xNd42KX.gif" width="800">
</div>

<div align="center" >

**[Link do vídeo completo sobre o projeto](https://www.youtube.com/watch?v=RIIGVwqbESE)**

</div>

---

## :information_source: Sobre

- O projeto **todo dark** é um site de lista de tarefas, com a possibilidade de adicionar, remover, marcar como concluída e persistir as tarefas por meio do localStorage.
- É o 1º desafio do curso **Ignite da trilha React Native 2022 da [Rocketseat](https://www.rocketseat.com.br/)**
- Para a construção da interface desse projeto foi usado **[React](https://react.dev)** com **[TypeScript](https://www.typescriptlang.org/)**.
- A estilização é feita com CSS comum sem nenhuma lib por meio do **[CSS modules](https://github.com/css-modules/css-modules)** já que a ideia é entender o básico do React em desenvolvimento web.

- **Adição de tarefa**

<div align="center" >
      <img src="https://i.imgur.com/vDhUAgO.png" width="700">
      <img src="https://i.imgur.com/Jv9QDgS.png" width="700">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo de praticar os conceitos básicos do desenvolvimento web com React como:
  - Praticar o uso de TypeScript;
  - Lógica de programação com JavaScript;
  - Componentes, componentização e suas propriedades;
  - Variável Estado e manipulações de variável Estado;
  - Otimização simples como memo
  - Formatação de datas com Date FNS
  - Persistência de dados básica com localStorage;
  - Estilização básica com CSS e a aplicação de CSS modules;
  - Boas práticas de acessibilidade com axe-core;
  - Uso de elementos do Radix UI para construção de modais e tooltips com melhor acessibilidade;

- É um projeto simples, mas que trata da base de uma aplicação web com React.
- Temos funcionalidades e práticas como:
  1. Listar tarefas;
  2. Criar novas tarefas;
  3. Excluir tarefas;
  4. Persistir as tarefas por meio do localStorage;
  5. Melhoria de acessibilidade com testes e correções com axe-core e ChromeVox.
  6. Uso do Radix UI para construção de Modais e Tooltips com melhor acessibilidade
  7. Estilização com CSS modules

- **Marcando tarefas**

  <div align="center" >
      <img src="https://i.imgur.com/4arLhvP.png" width="700">
      <img src="https://i.imgur.com/m6QNJ5A.png" width="700">
  </div>

---

## :art: Design

- O Design do projeto foi fornecido pela **[Rocketseat](https://www.rocketseat.com.br/)** no primeiro módulo do Ignite - React por meio do Figma.

<div align="center">
  <h3><a href="https://www.figma.com/file/u2TAXCfiufWLNRZibyl3Hj/ToDo-List-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=56-96&mode=design&t=nl3sM63VnZNZZuAn-0">todo dark</a></h3>

  [![Design](https://i.imgur.com/xDgCJf4.png)](https://www.figma.com/file/u2TAXCfiufWLNRZibyl3Hj/ToDo-List-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=56-96&mode=design&t=nl3sM63VnZNZZuAn-0)
</div>

- **Excluindo tarefas**

<div align="center" >
      <img src="https://i.imgur.com/Rs3Gk7L.png" width="700">
      <img src="https://i.imgur.com/UGDzfnC.png" width="700">
</div>

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. React
  3. Vite
  4. Yarn(ou NPM)
  
- **Excluindo todas tarefas**

  <div align="center" >
      <img src="https://i.imgur.com/LrGYJwP.png" width="700">
      <img src="https://i.imgur.com/0885SsL.png" width="700">
      <img src="https://i.imgur.com/XJoxHbV.png" width="700">
  </div>

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  2. **[Date FNS](https://date-fns.org/)**
  3. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  4. **[Netlify](https://www.netlify.com/)**
  5. **[NodeJS](https://nodejs.org/en/)**
  6. **[Phosphor Icons](https://phosphoricons.com/)**
  7. **[Radix UI](https://www.radix-ui.com/)**
  8. **[React](https://pt1.br.react.dev/)**
  9. **[Sentry](https://sentry.io/welcome/)**
  10. **[TypeScript](https://www.typescriptlang.org/)**
  11. **[Vite](https://vitejs.dev/)**
  12. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**

---

## :truck: Entrega e distribuição continua

**<https://tododark-aszurar.netlify.app/>**

- Para a publicação da aplicação foi por meio da plataforma **[Netlify](https://www.netlify.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
<img src="https://i.imgur.com/KEj23Ou.png" width="1000">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/tododark
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    yarn dev
  ```

---

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
