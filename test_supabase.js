const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: 'backend/.env' });
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function test() {
  const { data: profiles, error: pErr } = await supabaseAdmin.from('profiles').select('*').limit(1);
  if (pErr) { console.error('Error fetching profile:', pErr); return; }
  if (!profiles || profiles.length === 0) { console.error('No profiles found'); return; }
  
  const user = profiles[0];
  console.log('Testing with user:', user.id);

  const testPayload = {
    user_id: user.id,
    target_city: 'TestCityJS',
    target_state: 'TestState',
    current_aqi: 50,
    target_aqi: 30,
    aqi_improvement_percent: 40,
    suitability_score: 80,
    advisory_text: 'Test',
  };
  
  const { data: adminData, error: adminErr } = await supabaseAdmin.from('saved_recommendations').insert(testPayload).select().single();
  if (adminErr) {
    console.error('Admin Insert Error:', adminErr);
  } else {
    console.log('Admin Insert Success:', adminData);
    await supabaseAdmin.from('saved_recommendations').delete().eq('id', adminData.id);
  }
}
test();
