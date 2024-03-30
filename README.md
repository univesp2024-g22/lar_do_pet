1. Clonar github

git clone https://github.com/vivianemk/LarDoPet


2. Instalar programas requeridos

  python 3.10
  https://www.python.org/ftp/python/3.10.0/python-3.10.0-amd64.exe   

  PostgreSQL
  https://www.postgresql.org/download/windows/
  
  link direto:
  https://sbp.enterprisedb.com/getfile.jsp?fileid=1258893
  
  PgAdmin
  https://www.pgadmin.org/download/pgadmin-4-windows/
  
  link direto:
  https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v8.4/windows/pgadmin4-8.4-x64.exe
  
  VSCode
  https://code.visualstudio.com/
  Instalar as extensões:
  Thunder client
  Material Icon Theme
  Python
   
3. Instalar ambiente


  Abrir código dentro do VS Code
  rodar dentro do cmd na pasta LarDoPet
  python -m virtualenv lardopet -p python3.10
 
  pip install virtualenv
  pip install virtualenvwrapper-win
  
  pip install fastapi==0.75.2
  pip install uvicorn==0.17.6
  pip install gunicorn==20.1.0
  pip install pydantic==1.9.0 
  
  pip install SQLAlchemy==1.4.36
  pip install psycopg2-binary==2.9.3
  pip install asyncpg==0.25.0
  
  pip freeze > requirements.txt
  
  
4. Rodar o programa

  Abrir o PGAdmin e criar um novo banco de dados chamado animal
  
  Criar tabelas no banco
  no terminal do VSCode rodar: 
  python criar_tabelas.py

  Executar o programa
  no terminal do VSCode rodar: 
  python main.py
   
5. 
