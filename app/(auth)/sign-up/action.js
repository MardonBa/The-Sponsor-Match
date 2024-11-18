"use server"

import { redirect } from "next/navigation";

export async function redirectToSignUp() {
  redirect("/create-account"); // This should redirect to a page that allows the user to set email, password, some other info
}