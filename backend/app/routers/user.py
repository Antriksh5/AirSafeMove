from fastapi import APIRouter, HTTPException, Depends
from typing import List, Optional, Any
from pydantic import BaseModel
from app.services.firebase_client import get_firebase
from firebase_admin import firestore 
from app.services.auth import verify_firebase_token

router = APIRouter()

class SavedRecommendation(BaseModel):
    id: Optional[str] = None
    user_id: Optional[str] = None  # FIXED: Made optional so frontend doesn't trigger 422 error
    target_city: str
    target_state: Optional[str] = None
    current_aqi: Optional[int] = None
    target_aqi: Optional[int] = None
    aqi_improvement_percent: Optional[float] = None
    suitability_score: Optional[float] = None
    avg_rent: Optional[float] = None
    distance_km: Optional[float] = None
    healthcare_score: Optional[float] = None
    respiratory_risk_reduction: Optional[float] = None
    life_expectancy_gain_years: Optional[float] = None
    job_match_score: Optional[float] = None
    aqi_trend: Optional[str] = None
    advisory_text: Optional[str] = None
    created_at: Optional[Any] = None

@router.post("/saved", response_model=SavedRecommendation)
async def save_recommendation(
    recommendation: SavedRecommendation, 
    uid: str = Depends(verify_firebase_token)
):
    """Save a city recommendation to Firestore using verified UID."""
    db = get_firebase()
    if not db:
        raise HTTPException(status_code=500, detail="Firebase client not initialized")
        
    try:
        # FIXED: Automatically assign the secure token UID to the data
        recommendation.user_id = uid

        user_ref = db.collection("profiles").document(uid)
        
        # Auto-create profile document if it doesn't exist
        if not user_ref.get().exists:
            user_ref.set({
                "id": uid,
                "name": "User",
                "updated_at": firestore.SERVER_TIMESTAMP
            })

        data = recommendation.dict(exclude={'id', 'created_at'}, exclude_none=True)
        data["created_at"] = firestore.SERVER_TIMESTAMP
        
        # Save to sub-collection
        _, new_doc = user_ref.collection("saved_recommendations").add(data)
        
        return {**data, "id": new_doc.id, "created_at": "timestamp_set"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Firestore Error: {str(e)}")

@router.get("/saved", response_model=List[SavedRecommendation])
async def get_saved_recommendations(uid: str = Depends(verify_firebase_token)):
    """Fetch saved recommendations for the verified user."""
    db = get_firebase()
    try:
        docs = db.collection("profiles").document(uid)\
                 .collection("saved_recommendations")\
                 .order_by("created_at", direction=firestore.Query.DESCENDING)\
                 .stream()
        
        return [{**doc.to_dict(), "id": doc.id} for doc in docs]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching: {str(e)}")

@router.delete("/saved/{saved_id}")
async def delete_saved_recommendation(
    saved_id: str, 
    uid: str = Depends(verify_firebase_token)
):
    """Remove a saved recommendation securely."""
    db = get_firebase()
    try:
        doc_ref = db.collection("profiles").document(uid)\
                    .collection("saved_recommendations").document(saved_id)
        
        if not doc_ref.get().exists:
            raise HTTPException(status_code=404, detail="Recommendation not found")
            
        doc_ref.delete()
        return {"status": "deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting: {str(e)}")