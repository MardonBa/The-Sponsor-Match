"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from "@/utils/supabase/server";
import { validateEmail, validatePassword } from "@/app/lib/auth/validation";

// This action should be called in the page that is redirected to 
// when the user wants to create an account with email
export async function signup(formData) {
    const supabase = await createClient();

    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmpassword")
    };

    const validEmail = validateEmail(data.email);
    const validPassword = validatePassword(data.password);
    const validConfirmedPassword = validatePassword(data.confirmPassword);

    if (validEmail && validPassword) {
      if (validPassword != validConfirmedPassword) {
        // update the ui in some way so that the user knows their passwords don't match
        console.log("passwords don't match");
        return;
      }

      delete data.confirmPassword;

      const { error } = await supabase.auth.signUp(data);
      if (error) {
          redirect('/');
      }
    
      revalidatePath('/', 'layout');
      //redirect('/dashboard'); no need to redirect
    } else {
        // TODO: Build this out
        // If the email or password is invalid, update the UI (somehow)
        console.log("failed");
    }
}