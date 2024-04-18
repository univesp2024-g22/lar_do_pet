# Projeto Integrador em Computação I - Semestre 01/2024
=======================================================
1. Criar a pasta do projeto e Clonar o repositório
git clone git@github.com:univesp2024-g22/lar_do_pet.git

2. Instalar programas requeridos

  python 3.12
  https://www.python.org/downloads/

  PostgreSQL
  https://www.postgresql.org/download/
  
  
  PgAdmin
  https://www.pgadmin.org/download/
  
  VSCode
  https://code.visualstudio.com/
  Instalar as extensões:
  Thunder client
  Material Icon Theme
  Python
   
3. Instalar ambiente (Windows)
  Abrir código dentro do VS Code
  rodar dentro do cmd na pasta LarDoPet
  ```shell
  python3.12 -m venv venv_pet
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

  Abrir o PGAdmin e criar um novo banco de dados chamado animal
  ou, como superusuário:
  
  ```sql
  create user lardopet with password 'lardopet';
  create database lardopet;
  grant all privileges on database lardopet to lardopet;
  ```
  
  Criar tabelas no banco (cuidado, pois esse comando destrói tabelas existentes)
  python criar_tabelas.py

  Para rodar, no terminal (ou terminal do VSCode):
  python main.py
