from typing import List

from fastapi import APIRouter, status, Depends, HTTPException, Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from models.animal_model import AnimalModel
# from schemas.animal_schema import animal_schema.Animal
from schemas import animal_schema
from core.deps import get_session

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED, response_model=animal_schema.AnimalSchema)
async def post_animal(animal: animal_schema.AnimalSchema, db: AsyncSession = Depends(get_session)):
    novo_animal= AnimalModel(**animal.dict())
    db.add(novo_animal)
    await db.commit()
    
    return novo_animal

@router.get('/', response_model=List[animal_schema.AnimalSchema])
async def get_animais(db:AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(AnimalModel)
        result = await session.execute(query)
        animais: List[AnimalModel] = result.scalars().all()
        
        return animais

@router.get('/{animal_id}', response_model=animal_schema.AnimalSchema, status_code=status.HTTP_200_OK)
async def get_animal(animal_id: int, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(AnimalModel).filter(AnimalModel.id == animal_id)
        result = await session.execute(query)
        animal = result.scalar_one_or_none()
        
        if animal:
            return animal
        else:
            raise HTTPException(detail='animal não encontrado', status_code=status.HTTP_404_NOT_FOUND)

@router.put('/{animal_id}', response_model=animal_schema.AnimalSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_animal(animal_id: int, animal: animal_schema.AnimalSchema, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(AnimalModel).filter(AnimalModel.id == animal_id)
        result = await session.execute(query)
        animal_model = result.scalar_one_or_none()
        
        if not animal_model:
            raise HTTPException(detail=f'animal id ({animal_id}) não encontrado', status_code=status.HTTP_404_NOT_FOUND)
        animal_model.nome = animal.nome
        animal_model.especie = animal.especie
        #animal_model.data_entrada = animal.data_entrada
        animal_model.genero = animal.genero
        animal_model.castrado = animal.castrado
        #animal_model.nascimento = animal.nascimento
        animal_model.raça = animal.raça
        animal_model.porte = animal.porte
        animal_model.peso = animal.peso
        animal_model.temperamento = animal.temperamento
        animal_model.adotado = animal.adotado
        
        #Tive que voltar ao Modelo anterior, pois esse não estava funcionando
        #modelo_animal = AnimalModel(id=animal_id, **animal.dict())
        #await session.merge(modelo_animal)
                
        await session.commit()
        return animal_model
        
@router.delete('/{animal_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_animal(animal_id: int, db: AsyncSession = Depends(get_session)):
   async with db as session:
        query = select(AnimalModel).filter(AnimalModel.animal_id == animal_id)
        result = await session.execute(query)
        animal_del = result.scalar_one_or_none()
        
        if animal_del:
            await session.delete(animal_del)
            await session.commit()
            
            return Response(status_code=status.HTTP_204_NO_CONTENT)
        else:
            raise HTTPException(detail=f'animal id ({animal_id}) não encontrado', status_code=status.HTTP_404_NOT_FOUND) 
        
        
