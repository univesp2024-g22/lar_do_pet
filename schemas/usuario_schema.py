from typing import Optional

from pydantic import BaseModel, EmailStr

class UsuarioSchemaBase(BaseModel):
    id: Optional[int] = None
    nome: str
    sobrenome: str
    cep: int
    numero: int
    complemento: str
    celular: str
    email: EmailStr
    tipo_usuario: str
    
    class Config:
        orm_mode = True
        from_attributes = True

class UsuarioSchemaCreate(UsuarioSchemaBase):
    senha: str
    
class UsuarioSchemaUpdate(UsuarioSchemaBase):
    nome: Optional[str]
    sobrenome: Optional[str]
    cep: Optional[int]
    numero: Optional[int]
    complemento: Optional[str]
    celular: Optional[str]
    email: Optional[EmailStr]
    tipo_usuario: Optional[str]

