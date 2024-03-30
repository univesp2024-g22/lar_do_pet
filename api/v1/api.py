from fastapi import APIRouter

from api.v1.endpoints import animal

api_router = APIRouter()
api_router.include_router(animal.router, prefix='/animais', tags=['animais'])
