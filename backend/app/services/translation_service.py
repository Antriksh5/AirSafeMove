import json
import logging
import os
from hashlib import sha256
from typing import Any, Dict

import google.generativeai as genai

logger = logging.getLogger(__name__)

LANGUAGE_NAMES = {
    "en": "English",
    "hi": "Hindi",
    "mr": "Marathi",
    "gu": "Gujarati",
    "te": "Telugu",
    "ta": "Tamil",
}

_translation_cache: dict[str, Dict[str, Any]] = {}


def translate_dictionary(source_translations: Dict[str, Any], language: str) -> Dict[str, Any]:
    if language == "en":
        return source_translations

    cache_key = _build_cache_key(source_translations, language)
    cached = _translation_cache.get(cache_key)
    if cached is not None:
        return cached

    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY environment variable not set")

    language_name = LANGUAGE_NAMES.get(language, language)
    prompt = "\n".join(
        [
            "You are a professional translator.",
            f"Translate the following JSON object's values into {language_name}.",
            "Rules:",
            "- Keep ALL JSON keys exactly as-is",
            "- Do NOT translate proper nouns, city names, or brand names",
            '- Do NOT translate the app name "शहर AI"',
            "- Do NOT translate values that are currency symbols (₹) or units (km, km/h)",
            "- Preserve all {placeholder} tokens exactly as they appear e.g. {name}, {city}",
            "- Return ONLY valid JSON. No markdown, no backticks, no explanation.",
            json.dumps(source_translations, ensure_ascii=False, indent=2),
        ]
    )

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(
        "gemini-2.5-flash",
        generation_config=genai.types.GenerationConfig(
            temperature=0.2,
            max_output_tokens=8192,
        ),
    )
    response = model.generate_content(prompt)
    response_text = response.text if hasattr(response, "text") else ""
    translated = json.loads(_strip_code_fences(response_text))

    if not isinstance(translated, dict):
        raise ValueError("Gemini translation response was not a JSON object")

    _translation_cache[cache_key] = translated
    return translated


def _build_cache_key(source_translations: Dict[str, Any], language: str) -> str:
    payload = json.dumps(source_translations, ensure_ascii=False, sort_keys=True)
    return f"{language}:{sha256(payload.encode('utf-8')).hexdigest()}"


def _strip_code_fences(value: str) -> str:
    return value.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
