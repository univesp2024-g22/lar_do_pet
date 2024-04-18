from core.configs import settings

from sqlalchemy import Integer, String, Column, Boolean

class UsuarioModel(settings.DBBase):
    __tablename__ = 'usuario'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(256))
    sobrenome: str = Column(String(256))
    cep: int = Column(Integer)
    numero: int = Column(Integer)
    complemento: str = Column(String(100))
    senha: str = Column(String(256), nullable=False)
    celular: str = Column(String(256))
    email: str = Column(String(256), nullable=False, unique=True)
    tipo_usuario: str = Column(String(256))
    
    
    