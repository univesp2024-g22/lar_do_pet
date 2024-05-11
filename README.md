Para executar o frontend:

1. Instale o npm e node.js:
```
  https://nodejs.org/en/download  
  https://www.npmjs.com/package/download
```
  
2. Dentro de um Terminal navegue até a pasta do frontent e execute  o seguinte comando para instalar as dependências necessárias:
```
npm install
```

2. Rode o projeto com o seguinte código:
```
npm run dev
```

O fastAPI é instalado da mesma forma que é explicado na branch Main. Execute primeiro o criar_tabelas.py e depois execute o seguinte código para rodar o backend:
```
uvicorn main:app --reload
```
