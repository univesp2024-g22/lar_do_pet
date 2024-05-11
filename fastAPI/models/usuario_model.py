from core.configs import settings
from sqlalchemy import Integer, String, Column, Date

class UsuarioModel(settings.DBBase):
    __tablename__ = 'usuario'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    # cpf: str = Column(String(11))
    # dataNascimento: Date = Column(Date)
    nome: str = Column(String(256))
    phone: str = Column(String(256))
    email: str = Column(String(256), nullable=False, unique=True)
    confirmeEmail: str = Column(String(256), nullable=False, unique=True)
    # sobrenome: str = Column(String(256))
    cep: str = Column(String(9))
    endereco: str = Column(String(256))
    numero: str = Column(String(256))
    bairro: str = Column(String(256))
    cidade: str = Column(String(256))
    estado: str = Column(String(2))
    senha: str = Column(String(256), nullable=False)
    confirmeSenha: str = Column(String(256), nullable=False)
