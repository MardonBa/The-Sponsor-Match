"use server";

export async function loginWithGoogle(response) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
          redirectTo: 'localhost:3000/auth/callback'
      }
  });

  console.log(data.url);

  if (data.url) {
      redirect(data.url);
  }
}