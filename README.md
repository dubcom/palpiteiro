# Palpiteiros - Venha dar seu palpite: Faça sua aposta

``A stack utilizada: Vite, React, NPM, TailwindCSS, FIREBASE,  e muitas outras bibliotecas, hospedado na Vercel``

## Usando o framework React

<https://pt-br.reactjs.org/>

O React utiliza o JSX

A constante Title recebe as props e a arrow function diz que em h1 e interpolando com JS {props.children} definimos que as props recebem os dados do filho

```js
const Title = (props) => (
  <h1>{props.children}</h1>
)
```

Como é renderizado aqui com a constante Title:

```js
export function App() {
  return (
    <div className="app">
    <Title>Um título </Title>
    </div>
  )
}
```

Ou a forma mais comum de se fazer que é já declarando as props e depois apenas interpolando {} consigo mesmas:

```js
const Title = ({ name, children }) => (
  <h1>{name} {children}</h1>
)

export function App() {
  return (
    <div className="app">
    <Title name="Olá">Um título </Title>
    </div>
  )
}
```

E a forma mais simplificada também utilizando o '...props' que importa todo o resto das propriedades:

```js
const Title = ({ children, ...props }) => (
  <h1 {...props}> {children}</h1>
)

export function App() {
  return (
    <div className="app">
    <Title name="Olá">Um título </Title>
    <Title name="Olá">Um título 2</Title>
    <Title name="Olá">Um título 3</Title>
    </div>
  )
}
```

Ainda no React, vamos utilizar uma biblioteca chamada React Router Dom, para manipularmos as navegações, URL Guide:
<https://reactrouter.com/en/main/start/tutorial>

```js
npm install react-router-dom localforage match-sorter sort-by
```

********



## Vite.js - Biblioteca que agiliza a criação do Frontend

Utilizando uma biblioteca que agiliza na criação da aplicação que é o Vite.js: <https://vitejs.dev/>

```js
npm create vite@latest

cd web

npm install

npm run dev
```

Para podermos importar svg no React usando o Vite:
Guia na URL: <https://www.npmjs.com/package/vite-plugin-svgr>

```js
npm i vite-plugin-svgr
```

Para corrigir os caminhos/paths no Vite:

Importar do próprio Node o path

```js
import path from 'path'
```

```js
resolve: {
alias: {
'~': path.resolve(__dirname, './src')
}
```

********

## Tailwind CSS

O Tailwind CSS: <https://tailwindcss.com/>

Instalação utilizando o Vite:
<https://tailwindcss.com/docs/guides/vite>

CLI

```js
npm install -D tailwindcss postcss autoprefixer
```

Para rodar

```js
npx tailwindcss init -p
```

Alteração no tailwind.config.cjs para definir quais são os arquivos que ele irá ler:

```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

Importar dentro do css index/global:

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Depois importar dentro do main
********



### VERCEL - DEPLOY

Depois importamos o rep do Git para a Vercel e definimos as váriaveis que foram declaradas no .env.example lá para fazermos as conexões com o banco de dados

E hospedamos na Vercel para tornar publico:
<https://vercel.com/>

Para a Vercel entender que nossa aplicação Web é diferente precisamos definir algumas configurações que indicam que nossa aplicação não é toda separada por rotas, um arquivo ``vercel.json``, URL GUIA:
<https://vercel.com/docs/concepts/functions/serverless-functions>

Então declaramos dentro desse arquivo e definimos para qual rota será direcionado todas os processos:

```js
{
  "rewrites": [
   {
    "source": "/(.*)",
    "destination": "/api"
   }
  ]
}
```

Jogamos o ``router.js, setup.js e o server.js que foi renomeado para index.js`` dentro da pasta api (antiga app), e no package.json mudamos o script para rodar o server:

```js
 "scripts": {
    "start": "node -r dotenv-safe/config api/index.js"
  },
```
