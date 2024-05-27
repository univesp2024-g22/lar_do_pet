from core.configs import settings
from datetime import date
from models.usuario_model import UsuarioModel
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey

class AnimalModel(settings.DBBase): 
    __tablename__='animal'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    name: str = Column(String(256))
    especie: str = Column(String(256))
    genero: str = Column(String(256))
    porte: str = Column(String(256))
    imageUrl: str = Column(String(256))
    imagePath: str = Column(String(256))
    userId: str = Column(String(256))
    userBairro: str = Column(String(256))
    userCidade: str = Column(String(256))
    userEstado: str = Column(String(2))
    userEmail: str = Column(String(256))
    userFirstName: str = Column(String(256))
    userPhone: str = Column(String(256))
    # createdAt: date = Column(date)