from typing import Optional

from datetime import date

from pydantic import BaseModel as SCBaseModel


class AnimalSchema(SCBaseModel):
    id: Optional[int] = None
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
    adotado: bool
    usuario_id: Optional[int]
    
    class Config:
        orm_mode = True
        from_attributes = True
