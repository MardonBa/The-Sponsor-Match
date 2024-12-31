"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sanitizeInput } from '@/app/lib/auth/validation';
import { createClient } from '@/utils/supabase/server';

export default async function login(formData) {
    const supabase = await createClient();

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    const validEmail = sanitizeInput(data.email, 'email');
    const validPassword = sanitizeInput(data.password, 'password');

    if (validEmail && validPassword) {
        const { error } = await supabase.auth.signInWithPassword(data);
        if (error) {
            console.log(error);
            redirect('/log-in');
        }
    
        revalidatePath('/', 'layout');
        redirect('/create-account');
    } else {
        // TODO: Build this out
        // If the email or password is invalid, update the UI (somehow)
        console.log("failed");
    }
}