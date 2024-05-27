from typing import Optional
from datetime import date
from pydantic import BaseModel as SCBaseModel

class AnimalSchema(SCBaseModel):
    id: Optional[int] = None
    name: str
    especie: str
    genero: str
    porte: str
    imageUrl: Optional[str]
    imagePath: Optional[str]
    userId: Optional[str]
    userBairro: Optional[str]
    userCidade: Optional[str]
    userEstado: Optional[str]
    userEmail: Optional[str]
    userFirstName: Optional[str]
    userPhone: Optional[str]
    # createdAt: Optional[date]
    
    class Config:
        orm_mode = True
        from_attributes = True
