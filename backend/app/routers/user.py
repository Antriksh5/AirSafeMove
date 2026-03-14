from fastapi import APIRouter, HTTPException
from typing import List, Optional
from pydantic import BaseModel
from app.services.supabase_client import get_supabase

router = APIRouter()

class SavedRecommendation(BaseModel):
    id: str
    user_id: str
    target_city: str
    target_state: Optional[str] = None
    current_aqi: Optional[int] = None
    target_aqi: Optional[int] = None
    aqi_improvement_percent: Optional[float] = None
    suitability_score: Optional[float] = None
    advisory_text: Optional[str] = None
    created_at: str

@router.get("/saved", response_model=List[SavedRecommendation])
async def get_saved_recommendations(user_id: str):
    """
    Fetch all saved city recommendations for a specific user.
    """
    supabase = get_supabase()
    if not supabase:
        raise HTTPException(status_code=500, detail="Supabase client not initialized")
        
    try:
        response = supabase.from_("saved_recommendations") \
            .select("*") \
            .eq("user_id", user_id) \
            .order("created_at", desc=True) \
            .execute()
        
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching saved recommendations: {str(e)}")

@router.get("/profile")
async def get_user_profile(user_id: str):
    """
    Fetch the user's profile information from the profiles table.
    """
    supabase = get_supabase()
    if not supabase:
        raise HTTPException(status_code=500, detail="Supabase client not initialized")
        
    try:
        response = supabase.from_("profiles") \
            .select("*") \
            .eq("id", user_id) \
            .single() \
            .execute()
            
        if not response.data:
            raise HTTPException(status_code=404, detail="Profile not found")
            
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching profile: {str(e)}")


@router.delete("/saved/{saved_id}")
async def delete_saved_recommendation(saved_id: str, user_id: str):
    """Remove a saved recommendation for a user."""
    supabase = get_supabase()
    if not supabase:
        raise HTTPException(status_code=500, detail="Supabase client not initialized")

    try:
        response = supabase.from_("saved_recommendations") \
            .delete() \
            .eq("id", saved_id) \
            .eq("user_id", user_id) \
            .execute()

        # If nothing was deleted, treat as not found
        if response.data is None or (isinstance(response.data, list) and len(response.data) == 0):
            raise HTTPException(status_code=404, detail="Saved recommendation not found")

        return {"status": "deleted"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting saved recommendation: {str(e)}")

