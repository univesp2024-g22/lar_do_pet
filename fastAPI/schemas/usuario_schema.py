from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class UsuarioSchemaBase(BaseModel):
    firstName: Optional[str]
    lastName: Optional[str]
    phone: Optional[str]
    email: Optional[EmailStr]
    confEmail: Optional[EmailStr]
    cep: Optional[str] = Field(None, min_length=8, max_length=9)
    logradouro: Optional[str]
    number: Optional[str]
    bairro: Optional[str]
    cidade: Optional[str]
    uf: Optional[str] = Field(None, min_length=2, max_length=2)
    password: Optional[str]
    confPassword: Optional[str]
    
    class Config:
        from_attributes = True

class UsuarioSchemaCreate(UsuarioSchemaBase):
    confEmail: EmailStr
    confPassword: str

class UsuarioSchemaUpdate(UsuarioSchemaBase):
    firstName: Optional[str]
    lastName: Optional[str]
    phone: Optional[str]
    email: Optional[EmailStr]
    confEmail: Optional[EmailStr]
    cep: Optional[str] = Field(None, min_length=8, max_length=9)
    logradouro: Optional[str]
    number: Optional[str]
    bairro: Optional[str]
    cidade: Optional[str]
    uf: Optional[str] = Field(None, min_length=2, max_length=2)
    password: Optional[str]
    confPassword: Optional[str]
