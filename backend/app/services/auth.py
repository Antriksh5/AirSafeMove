from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# Change the import to use your helper function
from app.services.firebase_client import get_auth 

# Initialize the scheme for Bearer tokens
security = HTTPBearer()

async def verify_firebase_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """
    Extracts the Bearer token, verifies it with Firebase, and returns the user's UID.
    """
    token = credentials.credentials
    try:
        # THE FIX: Call get_auth() to guarantee Firebase is initialized FIRST
        firebase_auth = get_auth() 
        
        # verify_id_token checks the signature and expiration
        decoded_token = firebase_auth.verify_id_token(token)
        return decoded_token['uid']
    except Exception as e:
        # Print the exact error to the terminal so we don't have to guess next time!
        print(f"Token Verification Failed: {e}") 
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid or expired Firebase token: {str(e)}",
            headers={"WWW-Authenticate": "Bearer"},
        )