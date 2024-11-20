"use server"

import { revalidatePath } from 'next/cache';
import { createClient } from "@/utils/supabase/server";
import { validateEmail, validatePassword } from "@/app/lib/auth/validation";

// This action should be called in the page that is redirected to 
// when the user wants to create an account with email
export async function signup(formData) {
    const supabase = await createClient();

    const validEmail = validateEmail(formData.email);
    const validPassword = validatePassword(formData.password);
    const validConfirmedPassword = validatePassword(formData.confirmedPassword);

    if (validEmail && validPassword && validConfirmedPassword) {
      if (formData.password!= formData.confirmedPassword) {
        // update the ui in some way so that the user knows their passwords don't match
        console.log("passwords don't match");
        return;
      }

      delete formData.confirmPassword;

      const { data, error } = await supabase.auth.signUp(formData);
      console.log("data: " + data);
      console.log("err: " + error);
      if (error) {
        return { success: false, error }
      }
      revalidatePath('/', 'layout');
      return { success: true, data }
    } else {
        // TODO: Build this out
        // If the email or password is invalid, update the UI (somehow)
        console.log("failed");
    }
}