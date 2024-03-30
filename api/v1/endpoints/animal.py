from typing import List

from fastapi import APIRouter
from fastapi import status
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.animal_model import AnimalModel
from schemas.animal_schema import AnimalSchema
from core.deps import get_session

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED, response_model=AnimalSchema)
async def post_animal(animal: AnimalSchema, db: AsyncSession = Depends(get_session)):
    novo_animal = AnimalModel(nome=animal.nome, especie=animal.especie, 
                              #data_entrada=animal.data_entrada, 
                              genero=animal.genero,
                              castrado=animal.castrado, 
                              #nascimento=animal.nascimento, 
                              raça=animal.raça, porte=animal.porte, peso=animal.peso, 
                              temperamento=animal.temperamento, adotado=animal.adotado)
    
    db.add(novo_animal)
    await db.commit()
    
    return novo_animal

@router.get('/', response_model=List[AnimalSchema])
async def get_animais(db:AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(AnimalModel)
        result = await session.execute(query)
        animais: List[AnimalModel]=result.scalars().all()
        
        return animais

@router.get('/{animal_id}', response_model=AnimalSchema, status_code=status.HTTP_200_OK)
async def get_animal(animal_id: int, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(AnimalModel).filter(AnimalModel.id == animal_id)
        result = await session.execute(query)
        animal = result.scalar_one_or_none()
        
        if animal:
            return animal
        else:
            raise HTTPException(detail='animal não encontrado', status_code=status.HTTP_404_NOT_FOUND)

@router.put('/{animal_id}', response_model=AnimalSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_animal(animal_id: int, animal: AnimalSchema, db: AsyncSession = Depends(get_session)):
   async with db as session:
        query = select(AnimalModel).filter(AnimalModel.id == animal_id)
        result = await session.execute(query)
        animal_up = result.scalar_one_or_none()
        
        if animal_up:
            animal_up.nome = animal.nome
            animal_up.especie = animal.especie
            #animal_up.data_entrada = animal.data_entrada
            animal_up.genero = animal.genero
            animal_up.castrado = animal.castrado
            #animal_up.nascimento = animal.nascimento
            animal_up.raça = animal.raça
            animal_up.porte = animal.porte
            animal_up.peso = animal.peso
            animal_up.temperamento = animal.temperamento
            animal_up.adotado = animal.adotado
            
            await session.commit()
            
            return animal_up
        else:
            raise HTTPException(detail='animal não encontrado', status_code=status.HTTP_404_NOT_FOUND) 
        
@router.delete('/{animal_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_animal(animal_id: int, db: AsyncSession = Depends(get_session)):
   async with db as session:
        query = select(AnimalModel).filter(AnimalModel.id == animal_id)
        result = await session.execute(query)
        animal_del = result.scalar_one_or_none()
        
        if animal_del:
            await session.delete(animal_del)
            await session.commit()
            
            return Response(status_code=status.HTTP_204_NO_CONTENT)
        else:
            raise HTTPException(detail='animal não encontrado', status_code=status.HTTP_404_NOT_FOUND) 
        
        