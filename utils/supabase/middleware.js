import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.


  // The following code checks if the route being requested is public or private,
  // and checks the user's authentication status.
  // If the user is not authenticated and tries to reach a private route, redirect
  // them to the homepage. If the user is authenticated and goes to a public route,
  // redirect them to the dashboard

  const url = request.nextUrl.clone();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  // Each list should contain all routes in the private and public route groups respectively
  // If a path is ever added to either group, it has to be added to these lists
  const privatePaths = [
    '/advertise', '/analytics', '/dashboard', '/log-out', '/messages', '/partnerships', '/payment-history', '/search', '/settings', 
    '/log-out'
  ];
  const publicPaths = [
    '/contact', '/features', '/log-in', '/meet-the-team', '/pricing', 'sign-up', '/create-account', '/forgot-password'
  ];
  
  const isPrivateRoute = privatePaths.some(path => url.pathname.startsWith(path));
  const isPublicRoute = publicPaths.some(path => url.pathname.startsWith(path));

  // Case where the user is not authenticated and tries to access a private route
  if (!user && isPrivateRoute) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Case where the user is authenticated and is sent to a public route
  if (user && isPublicRoute) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!
  return supabaseResponse;
}