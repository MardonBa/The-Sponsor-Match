"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { validateEmail, validatePassword } from '@/app/lib/validation';
import { createClient } from '@/utils/supabase/server';

export async function login(formData) {
    console.log("started");
    const supabase = await createClient();

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    const validEmail = validateEmail(data.email);
    const validPassword = validatePassword(data.password);

    if (validEmail && validPassword) {
        const { error } = await supabase.auth.signInWithPassword(data);
        if (error) {
            redirect('/');
        }
    
        //revalidatePath('/', 'layout');
        redirect('/dashboard');
    } else {
        // TODO: Build this out
        // If the email or password is invalid, update the UI (somehow)
        console.log("failed");
    }
}