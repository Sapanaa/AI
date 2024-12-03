import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


//myapp.com/dashboard/* meeds to be protected
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
export default clerkMiddleware(async (auth, req) => {
  // Await the auth promise to get the actual Auth instance
  const authInstance = await auth;

  // Ensure that the route is protected
  if (isProtectedRoute(req)) {
    await authInstance.protect(); // Call protect() on the resolved auth instance
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};