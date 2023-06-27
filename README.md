# Link para o deploy do projeto

https://produktabel.netlify.app

# Tecnologias

## Back-end e Banco de dados

### Uso do Prisma para Migrações.

O Prisma simplifica a manipulação do banco de dados em aplicativos Node.js. Ele oferece recursos como migrações automáticas, consultas tipadas e geração de cliente para acesso ao banco de dados.

### Uso do SQLite como Banco de Dados.

O SQLite é um banco de dados relacional leve e de código aberto que oferece suporte a armazenamento local de dados. Como é um projeto menor, escolhi o SQLite devido à sua facilidade de manipulação e configuração, em conjunto com o Prisma.

### Node.js e Express.

Optei por usar o Node.js em conjunto com o Express para o processo de criação de rotas e manipulação de solicitações e respostas ao banco de dados.

## Front-end

### React

Eu escolhi usar o React como minha framework de escolha, pois tenho mais experiência. Vou combinar o React com outras bibliotecas populares para tornar o desenvolvimento mais eficiente e produtivo.

### TailwindCSS

Para estilização, optei pelo Tailwind CSS. Com suas classes, poderei estilizar meus componentes de forma rápida e fácil, sem a necessidade de escrever CSS personalizado extensivo.

### Radix-UI

Para alguns componentes prontos para uso, recorri ao Radix UI. Essa biblioteca oferece uma variedade de componentes bem projetados, como adicionar, editar e excluir produtos. 

### React-Hook-Form

Além disso, usei o React Hook Form, para lidar com formulários no React. Com ela, poderei facilmente manipular dados do formulário, aplicar validação utilizando o Yup.

## instalação

Clone o repositório do projeto frontend


```
git clone https://github.com/IugAnemona/ProdukTabel.git
```
Clone o repositório do projeto frontend

```
git clone https://github.com/IugAnemona/ProdukTabel-backend.git
```


Navegue até o diretório do projeto backend:

```
cd ProdukTabel-backend
```


Execute o seguinte comando para instalar as dependências do projeto backend:

```
npm install
```


Para gerar o código do Prisma, execute o seguinte comando:

```
npx prisma generate
```


Inicie o servidor de desenvolvimento do backend com o seguinte comando:

```
npm run dev
```


Navegue até o diretório do projeto frontend:

```
cd ../ProdukTabel
```


Execute o seguinte comando para instalar as dependências do projeto frontend:

```
npm install
```


Inicie o servidor de desenvolvimento do frontend com o seguinte comando:

```
npm run dev
