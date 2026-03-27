from typing import Any, Dict

from fastapi import APIRouter
from pydantic import BaseModel

from app.services.translation_service import translate_dictionary

router = APIRouter()


class TranslationRequest(BaseModel):
    language: str
    source_translations: Dict[str, Any]


class TranslationResponse(BaseModel):
    translations: Dict[str, Any]
    generated: bool


@router.post("/")
async def create_translation(request: TranslationRequest) -> TranslationResponse:
    if request.language == "en":
        return TranslationResponse(translations=request.source_translations, generated=False)

    try:
        translated = translate_dictionary(request.source_translations, request.language)
        return TranslationResponse(translations=translated, generated=True)
    except Exception:
        return TranslationResponse(translations=request.source_translations, generated=False)
