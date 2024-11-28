import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const next = searchParams.get('next') ?? '/';
  const prefix = "http://localhost:3000";
  

  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // redirect user to specified redirect URL or root of app
      return NextResponse.redirect(prefix + next);
    } else {
      // redirect the user to an error page with some instructions
      // TODO some sort of error handling
      console.log("err: " + error);
      return NextResponse.redirect(prefix + "/");
    }
  }
}