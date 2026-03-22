import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        // Set cookies on the request (for downstream server components)
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        // Re-create response so it carries the updated request
        supabaseResponse = NextResponse.next({ request });
        // Set cookies on the response (for the browser)
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // Refresh session — this is required to keep the session alive
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If not authenticated and not on a public route, redirect to login
  const isPublicRoute =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/auth/callback");

  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // If authenticated and on login page, redirect to chat
  if (user && request.nextUrl.pathname.startsWith("/login")) {
    const url = request.nextUrl.clone();
    url.pathname = "/chat";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
