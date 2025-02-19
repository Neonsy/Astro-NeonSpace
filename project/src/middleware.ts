import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isSecureRoute = createRouteMatcher(['/dashboard(.*)']);

export const onRequest = clerkMiddleware((auth, context) => {
    if (isSecureRoute(context.request)) {
        const { userId, redirectToSignIn } = auth();
        if (!userId) {
            return redirectToSignIn();
        }
    }
});
