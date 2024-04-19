from core.configs import settings

from sqlalchemy import Integer, String, Column, Boolean

class UsuarioModel(settings.DBBase):
    __tablename__ = 'usuario'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(256))
    sobrenome: str = Column(String(256))
    # NOTE: CEP eu colocaria como string, pq tem zero na frente
    cep: int = Column(Integer)
    numero: int = Column(Integer)
    complemento: str = Column(String(100))
    # NOTE: senha não deveria ser salva em plain text mas a gente pode mudar isso depois
    senha: str = Column(String(256), nullable=False)
    # NOTE: porque celular é uma string?
    celular: str = Column(String(256))
    email: str = Column(String(256), nullable=False, unique=True)
    # NOTE: Tipo de usuário deveria ser um enum e nao uma string
    tipo_usuario: str = Column(String(256))

