from core.configs import settings
from sqlalchemy import Integer, String, Column

class UsuarioModel(settings.DBBase):
    __tablename__ = 'usuario'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    firstName: str = Column(String(256))
    lastName: str = Column(String(256))
    phone: str = Column(String(256))
    email: str = Column(String(256), nullable=False, unique=True)
    confEmail: str = Column(String(256), nullable=False, unique=True)
    cep: str = Column(String(9))
    logradouro: str = Column(String(256))
    number: str = Column(String(256))
    bairro: str = Column(String(256))
    cidade: str = Column(String(256))
    uf: str = Column(String(2))
    password: str = Column(String(256), nullable=False)
    confPassword: str = Column(String(256), nullable=False)
