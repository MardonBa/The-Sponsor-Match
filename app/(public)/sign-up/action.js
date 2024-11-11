"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from "@/utils/supabase/server";
import { validateEmail, validatePassword } from "@/app/lib/validation";

export async function signup(formData) {
    const supabase = await createClient();

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    const validEmail = validateEmail(data.email);
    const validPassword = validatePassword(data.password);

    if (validEmail && validPassword) {
        const { error } = await supabase.auth.signUp(data);
        if (error) {
            redirect('/');
        }
    
        revalidatePath('/', 'layout');
        redirect('/dashboard');
    } else {
        // TODO: Build this out
        // If the email or password is invalid, update the UI (somehow)
        console.log("failed");
    }
}


export async function signUpWithGoogle() {
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