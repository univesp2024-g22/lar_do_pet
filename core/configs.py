
from pydantic_settings import BaseSettings

from sqlalchemy import MetaData
from sqlalchemy.ext.asyncio import AsyncAttrs
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm.decl_api import DeclarativeAttributeIntercept

class DBBase(AsyncAttrs, DeclarativeBase):
    pass

class Settings(BaseSettings):
    API_V1_STR: str = '/api/v1'
    #DB_URL: str = "postgresql+asyncpg://lardopet:lardopet@localhost:5432/lardopet"
    DB_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/conexaopet"
    DBBase: DeclarativeAttributeIntercept = DBBase
    class Config:
        case_sensitive = True
        
settings = Settings()

    
    
    

