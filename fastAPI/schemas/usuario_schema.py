from typing import Optional
from pydantic import BaseModel, EmailStr, Field
from datetime import date

class UsuarioSchemaBase(BaseModel):
    # cpf: Optional[str] = Field(None, min_length=11, max_length=11)
    # dataNascimento: Optional[date]
    nome: Optional[str]
    phone: Optional[str]
    # sobrenome: Optional[str]
    email: Optional[EmailStr]
    confirmeEmail: Optional[EmailStr]
    cep: Optional[str] = Field(None, min_length=8, max_length=9)
    endereco: Optional[str]
    numero: Optional[str]
    bairro: Optional[str]
    cidade: Optional[str]
    estado: Optional[str] = Field(None, min_length=2, max_length=2)
    senha: Optional[str]
    confirmeSenha: Optional[str]
    
    class Config:
        from_attributes = True

class UsuarioSchemaCreate(UsuarioSchemaBase):
    confirmeEmail: EmailStr
    confirmeSenha: str

class UsuarioSchemaUpdate(UsuarioSchemaBase):
    # cpf: Optional[str] = Field(None, min_length=11, max_length=11)
    # dataNascimento: Optional[date]
    nome: Optional[str]
    phone: Optional[str]
    # sobrenome: Optional[str]
    email: Optional[EmailStr]
    confirmeEmail: Optional[EmailStr]
    cep: Optional[str] = Field(None, min_length=8, max_length=9)
    endereco: Optional[str]
    numero: Optional[str]
    bairro: Optional[str]
    cidade: Optional[str]
    estado: Optional[str] = Field(None, min_length=2, max_length=2)
    senha: Optional[str]
    confirmeSenha: Optional[str]
