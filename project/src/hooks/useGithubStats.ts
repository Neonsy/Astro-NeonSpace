import { queryClient } from '@/lib/query';
import { fetchGithubStats } from '@/lib/services/github';
import { useQuery } from '@tanstack/react-query';

export function useGithubStats(username: string, authToken: string) {
    return useQuery(
        {
            queryKey: ['githubStats', username],
            queryFn: () => fetchGithubStats(username, authToken),
        },
        queryClient
    );
}
