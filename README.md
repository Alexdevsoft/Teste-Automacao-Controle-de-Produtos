# Automação de Testes para Sistema Controle de Produtos com Cypress

Este projeto contém testes automatizados para o sistema de controle de produtos, utilizando Cypress. Os testes cobrem funcionalidades como login, cadastro de produtos e validação de formulários.

## Pré-requisitos

Antes de executar os testes, certifique-se de que você tem o seguinte instalado:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1.  Clone este repositório para o seu computador:

    ```bash
    git clone https://github.com/Alexdevsoft/Teste-Automacao-Controle-de-Produtos.git
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd [nome do diretório do projeto]
    ```

3.  Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Executando os Testes

Para executar os testes automatizados, siga estas etapas:

# Instalação do Cypress:

- Abra o terminal e navegue até o diretório raiz do seu projeto
- Execute o seguinte comando para instalar o Cypress como uma dependência de desenvolvimento:
  ```bash
    npm install cypress --save-dev
    ```

1. Verificação da instalação:
- Após a instalação, você pode verificar se o Cypress foi instalado corretamente executando o seguinte comando no seu terminal:
    ```bash
      npx cypress --version
    ```
- Isso deve exibir a versão do Cypress instalada.

# Abra o Cypress:

  ```bash
    npx cypress open
   ```

  Isso abrirá a interface do Cypress, onde você poderá ver e executar os testes.

2.  Selecione o arquivo de teste \`product\_list.cy.js\` na lista de testes.

3.  Clique no arquivo de teste para executar os testes automatizados.

## Executando os Testes em Modo Headless

Para executar os testes em modo headless (sem interface gráfica), utilize o seguinte comando:

```bash
npx cypress run
```

Isso executará os testes e exibirá os resultados no terminal.

## Estrutura dos Testes

Os testes estão localizados no diretório \`cypress/e2e/product\_list.cy.js\`. Este arquivo contém os seguintes testes:

-   Login com credenciais válidas.
-   Adição de um novo produto com dados válidos.
-   Validação de formulário de cadastro de produtos.

## Relatório de Testes

Após a execução dos testes, você pode encontrar os relatórios de teste no diretório \`cypress/reports\`. Os relatórios estão em formato HTML e JSON.

### Este teste é exclusivo para um processo seletivo para uma vaga de QA na empresa [Adapt Edtech](https://www.adaptedtech.com.br/)

## Autor

Alexsandro Almeida
[Linkedin](www.linkedin.com/in/alexsandro-j-a-almeida)
