from core.configs import settings

from datetime import date

from sqlalchemy import Column, Integer, String, Boolean, ForeignKey

class AnimalModel(settings.DBBase): 
    __tablename__='animal'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(256))
    especie: str = Column(String(256))
    #data_entrada: date = Column(date)
    genero: str = Column(String(256))
    castrado: str = Column(String(256))
    #nascimento: date = Column(date)
    raça: str = Column(String(256))
    porte: str = Column(String(256))
    peso: int = Column(Integer)
    temperamento: str = Column(String(256))
    adotado: bool = Column(Boolean)
    usuario_id = Column(Integer, ForeignKey('usuario.id'))
    