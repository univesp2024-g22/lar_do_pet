from typing import Optional

from datetime import date

from pydantic import BaseModel as SCBaseModel


class AnimalBase(SCBaseModel):
    nome: str
    especie: str
    #data_entrada: date
    genero: str
    castrado: str
    #nascimento: date
    raça: str
    porte: str
    peso: int
    temperamento: str
    adotado: str
    

class AnimalCreate(AnimalBase):
    pass

class Animal(AnimalBase):
    animal_id: int
    class Config:
        from_attributes = True
