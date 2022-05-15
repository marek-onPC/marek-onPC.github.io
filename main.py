import os
from dotenv import load_dotenv
from fastapi import FastAPI
from auth.authentication import Authentication

from api import login

load_dotenv()

db_uri = os.environ["DB_URI"]
db_name = os.environ["DB_NAME"]

app = FastAPI()
authentication = Authentication()

app.include_router(login.router)
