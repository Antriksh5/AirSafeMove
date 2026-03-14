import os
import logging
from supabase import create_client, Client

logger = logging.getLogger(__name__)

_client: Client | None = None
_initialized = False


def get_supabase() -> Client | None:
    """
    Lazy-initialize and return a Supabase client using service role key.
    Uses lazy init so that load_dotenv() in main.py has run before we
    read the environment variables.
    """
    global _client, _initialized

    if _initialized:
        return _client

    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

    if not url or not key:
        logger.warning("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set – Supabase client unavailable")
        _initialized = True
        return None

    _client = create_client(url, key)
    _initialized = True
    return _client


# Keep a module-level alias for backwards compatibility, but it will be
# populated lazily via __getattr__ so imports don't break.
def __getattr__(name: str):
    if name == "supabase":
        return get_supabase()
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")
