import { createClient } from '@supabase/supabase-js';

const supabaseUrl = ''; // ENVIRONEMNT VARIABLE
const supabaseKey = ''; // ENVIRONEMNT VARIABLE

export const supabase = createClient(supabaseUrl, supabaseKey);
