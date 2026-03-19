import os
import logging
import firebase_admin
from firebase_admin import credentials, firestore, auth

logger = logging.getLogger(__name__)

_db = None

def get_firebase():
    global _db
    if _db is not None:
        return _db

    try:
        if not firebase_admin._apps:
            # 1. Check if we have a path to a service account file
            cert_path = os.environ.get("FIREBASE_SERVICE_ACCOUNT_PATH", "serviceAccountKey.json")
            
            if os.path.exists(cert_path):
                # Local/Docker mode: Use the JSON file
                cred = credentials.Certificate(cert_path)
                firebase_admin.initialize_app(cred)
                logger.info(f"Firebase initialized using certificate at {cert_path}")
            else:
                # Cloud Mode: Use Google's Application Default Credentials
                # This works automatically on Cloud Run if the Service Account has permissions
                firebase_admin.initialize_app()
                logger.info("Firebase initialized using Application Default Credentials.")

        _db = firestore.client()
        return _db
    except Exception as e:
        logger.error(f"Failed to initialize Firebase: {e}")
        return None

def get_auth():
    if not firebase_admin._apps:
        get_firebase()
    return auth