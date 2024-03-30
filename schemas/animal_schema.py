from typing import Optional

from datetime import date

from pydantic import BaseModel as SCBaseModel


class AnimalSchema(SCBaseModel):
    id: Optional[int]
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
    
    class Config:
        orm_mode = True

