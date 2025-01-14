import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
            staleTime: 1000 * 60 * 60 * 1, // 1 hour
            gcTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});
