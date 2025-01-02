import { NextResponse } from 'next/server'

export async function middleware(request) {
    // Add your middleware logic here
    let supabaseResponse = NextResponse.next({
      request
    });

    // Check the users_platforms table to see if a record with the user's id is there
    // if there is a record, redirect to /dashboard
    // if there isn't check to see if a user with their user id exists in the public users table
      // if there is, find out what type of user it is
        // if it's a creator, redirect to /create-account/content-creator
        // if it's a sponsor, reirect to /create-account/sponsor
      // if there isn't, redirect to /create-account

    return supabaseResponse;
}