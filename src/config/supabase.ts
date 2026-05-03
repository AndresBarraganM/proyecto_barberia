import { createClient } from '@supabase/supabase-js'
import { env } from './env'

// Cliente público (operaciones desde el cliente con RLS activo)
export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)

// Cliente admin (operaciones privilegiadas en el servidor, omite RLS)
export const supabaseAdmin = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
)
