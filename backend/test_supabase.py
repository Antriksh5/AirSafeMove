import os
import sys
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv('.env')

url = os.environ.get('SUPABASE_URL')
key = os.environ.get('SUPABASE_SERVICE_ROLE_KEY')

if not url or not key:
    print('Missing URL or Key')
    sys.exit(1)

supabase: Client = create_client(url, key)

profiles_res = supabase.table('profiles').select('*').limit(1).execute()
if not profiles_res.data:
    print('No profiles found')
    sys.exit(1)

user = profiles_res.data[0]
print(f"Testing with user_id: {user['id']}")

test_data = {
    'user_id': user['id'],
    'target_city': 'TestCityJS',
    'target_state': 'TestState',
    'current_aqi': 50,
    'target_aqi': 30,
    'aqi_improvement_percent': 40,
    'suitability_score': 80,
    'advisory_text': 'Test'
}

try:
    insert_res = supabase.table('saved_recommendations').insert(test_data).execute()
    print('Insert successful:', insert_res.data)
    
    # Cleanup
    if insert_res.data:
        delete_res = supabase.table('saved_recommendations').delete().eq('id', insert_res.data[0]['id']).execute()
        print('Cleanup successful')
except Exception as e:
    print(f'Insert failed: {e}')
