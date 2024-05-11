from fastapi import APIRouter

from api.v1.endpoints import animal, usuario

api_router = APIRouter()
api_router.include_router(animal.router, prefix='/animais', tags=['animais'])
api_router.include_router(usuario.router, prefix='/usuarios', tags=['usuarios'])
