from fastapi import FastAPI, HTTPException, Depends

from core.configs import settings
from api.v1.api import api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='API Lar do Pet')
app.include_router(api_router, prefix=settings.API_V1_STR)

# if __name__ =='__main__':
#     import uvicorn
    
#     uvicorn.run("main:app", host="0.0.0.0", port=8000, log_level='debug', reload = True)

origins = [
    "http://localhost:5173",  # Permita requisições deste domínio
    # adicione outros domínios conforme necessário
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Permita todos os métodos HTTP
    allow_headers=["*"],
)

