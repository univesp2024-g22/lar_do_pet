from typing import Generator
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import Session

async def get_session() -> AsyncGenerator: #original era Generator
    session: AsyncSession = Session()
    
    try:
        yield session
    finally:
        await session.close()
