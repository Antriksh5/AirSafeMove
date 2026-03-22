import logging
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

logging.basicConfig(level=logging.INFO, format="%(levelname)s  %(name)s  %(message)s")

# Load .env BEFORE importing routers to ensure env vars are available to any module-level code
_env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=_env_path)

from app.routers import cities, predictions, recommendations, advisory, report, user, city_explore

app = FastAPI(
    title="AirSafe Move API",
    description="AI-powered migration advisory system for Indian cities",
    version="1.0.0"
)

# CORS middleware for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://nextjs-frontend-44079236102.asia-south1.run.app",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(cities.router, prefix="/api/cities", tags=["Cities"])
app.include_router(predictions.router, prefix="/api/predict", tags=["Predictions"])
app.include_router(recommendations.router, prefix="/api/recommendations", tags=["Recommendations"])
app.include_router(advisory.router, prefix="/api/advisory", tags=["Advisory"])
app.include_router(report.router, prefix="/api/report", tags=["Report"])
app.include_router(user.router, prefix="/api/user", tags=["User"])
app.include_router(city_explore.router, prefix="/api/city-explore", tags=["City Explore"])


logger = logging.getLogger(__name__)


@app.on_event("startup")
def _warm_dataset_caches() -> None:
    try:
        from app.services.pdf_evidence_service import warm_pdf_evidence_cache

        logger.info("Warming PDF evidence caches (crime + religion)…")
        warm_pdf_evidence_cache()
        logger.info("PDF evidence caches ready.")
    except Exception as exc:
        logger.error("PDF evidence cache warming failed: %s", exc, exc_info=True)

    try:
        from app.services.city_evidence_service import warm_city_description_cache

        logger.info("Warming city description cache…")
        warm_city_description_cache()
        logger.info("City description cache ready.")
    except Exception as exc:
        logger.error("City description cache warming failed: %s", exc, exc_info=True)


@app.get("/")
async def root():
    return {"message": "AirSafe Move API", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {"status": "ok"}
