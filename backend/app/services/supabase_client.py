import os
from supabase import create_client, Client

def get_supabase() -> Client:
    """
    Initialize and return a Supabase client using service role key.
    """
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    
    if not url or not key:
        # Fallback to empty strings if not set to avoid init error during build
        return None
        
    return create_client(url, key)

# Create a singleton-ish instance
supabase = get_supabase()
