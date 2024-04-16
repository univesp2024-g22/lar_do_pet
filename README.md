1. Criar a pasta do projeto e Clonar o repositório

Criar uma pasta para baixar o projeto e no terminal (cmd no Windows) faça:
git clone -b <branch_name> <git_address>
```shell
git clone -b feature_0 https://github.com/univesp2024-g22/lar_do_pet.git
```
2. Instalar programas requeridos
  
  python 3.12
  ```shell
  https://www.python.org/downloads/
  ```
  PostgreSQL
  ```shell
  https://www.postgresql.org/download/
  ```
  PgAdmin
  ```shell
  https://www.pgadmin.org/download/
  ```
  VSCode
  ```shell
  https://code.visualstudio.com/
  ```
  Instalar as extensões:
  Thunder client, Material Icon Theme e Python

  
3. Instalar ambiente (Windows)

  Abrir código dentro do VS Code
  rodar dentro do cmd na pasta do projeto (pasta lar_do_pet)
  ```shell
  python -m venv venv_pet
  venv_pet\Scripts\activate
  pip install -r requirements.txt
  ```

  
4. Instalar Ambiente (Unix / WSL)
  ```bash
  python3.12 -m venv venv_pet
  source venv_pet/bin/activate # <- Unix
  pip install -r requirements.txt
  ```

5. Rodar o programa

  Abrir o PGAdmin e criar um novo banco de dados chamado lardopet:
  
  ```sql
  create user lardopet with password 'lardopet';
  create database lardopet;
  grant all privileges on database lardopet to lardopet;
  ```
  
  Criar tabelas no banco
  no terminal do VSCode rodar: 
  python criar_tabelas.py
  
  Executar o programa
  no terminal do VSCode rodar: 
  python main.py
   

