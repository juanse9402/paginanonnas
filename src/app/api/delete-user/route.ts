import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, user_id } = body;

    if (!id) {
      return NextResponse.json({ error: 'Falta el ID del perfil a eliminar' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({ error: 'Configuración de servidor incompleta (.env.local)' }, { status: 500 });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    // 1. Si el perfil tiene un user_id asociado, eliminar el usuario de Supabase Auth
    if (user_id) {
      const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(user_id);
      
      // Si por alguna razón el usuario no se encuentra en auth (ej. registros antiguos de prueba),
      // ignoramos el error 404 para permitir limpiar la fila de la tabla profiles.
      if (authError && authError.status !== 404) {
        throw authError;
      }
    }

    // 2. Eliminar la fila del perfil de la tabla public.profiles
    const { error: dbError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', id);

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, message: 'Auxiliar y credenciales eliminados por completo.' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error interno del servidor' }, { status: 500 });
  }
}
