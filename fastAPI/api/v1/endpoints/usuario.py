from typing import List

from fastapi import APIRouter, status, Depends, HTTPException, Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from models.usuario_model import UsuarioModel
from schemas import usuario_schema
from core.deps import get_session

router = APIRouter()

# PATH: (GET) http://localhost:8000/api/v1/usuarios
@router.get('/', response_model=List[usuario_schema.UsuarioSchemaUpdate])
async def index(db:AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(UsuarioModel)
        result = await session.execute(query)
        usuarios: List[UsuarioModel] = result.scalars().all()
        
        return usuarios

# PATH: (POST) http://localhost:8000/api/v1/usuarios
@router.post('/', status_code=status.HTTP_201_CREATED, response_model=usuario_schema.UsuarioSchemaUpdate)
async def create(usuario: usuario_schema.UsuarioSchemaCreate, db: AsyncSession = Depends(get_session)):
    novo_usuario= UsuarioModel(**usuario.dict())
    db.add(novo_usuario)
    await db.commit()
    
    return novo_usuario

