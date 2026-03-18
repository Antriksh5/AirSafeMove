import os
import logging
import firebase_admin
from firebase_admin import credentials, firestore, auth

logger = logging.getLogger(__name__)

# Global variables to hold the initialized app and db client
_firebase_app = None
_db = None

def get_firebase():
    """
    Initializes Firebase Admin SDK and returns the Firestore client.
    """
    global _firebase_app, _db

    if _db is not None:
        return _db

    # Path to your downloaded service account key
    cert_path = os.environ.get("FIREBASE_SERVICE_ACCOUNT_PATH", "serviceAccountKey.json")

    try:
        if not firebase_admin._apps:
            cred = credentials.Certificate(cert_path)
            _firebase_app = firebase_admin.initialize_app(cred)
            logger.info("Firebase Admin SDK initialized successfully.")
        
        _db = firestore.client()
        return _db
    except Exception as e:
        logger.error(f"Failed to initialize Firebase: {e}")
        return None

def get_auth():
    """Returns the Firebase Auth client."""
    if not firebase_admin._apps:
        get_firebase()
    return auth