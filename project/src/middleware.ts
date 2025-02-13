import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isSecureRoute = createRouteMatcher(['/dashboard(.*)']);

export const onRequest = clerkMiddleware((auth, context) => {
    const { userId, redirectToSignIn } = auth();

    if (isSecureRoute(context.request)) {
        if (!userId) {
            return redirectToSignIn();
        }
    }
});
