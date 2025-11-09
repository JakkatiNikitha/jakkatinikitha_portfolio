import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  status?: 'new' | 'read' | 'archived';
  created_at?: string;
}

export async function submitContactMessage(data: ContactMessage) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([{
      name: data.name,
      email: data.email,
      message: data.message,
    }]);

  if (error) {
    throw error;
  }

  return { success: true };
}
