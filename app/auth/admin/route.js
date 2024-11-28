import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {

  const { email } = await request.json();

  try {
    const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email);

    if (error) {
      console.log("error: " + error);
      // handle the error
      return NextResponse.json({ error }, { status: 400});
    }

    return NextResponse.json({ data }, { satus: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500});
  }
}