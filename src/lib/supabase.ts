import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('seu-projeto.supabase.co')
);

if (!isSupabaseConfigured) {
  console.info(
    '[Supabase] Variáveis de ambiente VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não configuradas. A plataforma continuará operando com persistência local (offline).'
  );
}

// Cria o cliente Supabase. Se não configurado, cria com placeholders para não quebrar a compilação.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);
