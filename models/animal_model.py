from core.configs import settings

from datetime import date

from sqlalchemy import Column, Integer, String

class AnimalModel(settings.DBBaseModel): 
    __tablename__='animal'
    
    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(100))
    especie: str = Column(String(100))
    #data_entrada: date = Column(date)
    genero: str = Column(String(100))
    castrado: str = Column(String(100))
    #nascimento: date = Column(date)
    raça: str = Column(String(100))
    porte: str = Column(String(100))
    peso: int = Column(Integer)
    temperamento: str = Column(String(100))
    adotado: str = Column(String(100))
