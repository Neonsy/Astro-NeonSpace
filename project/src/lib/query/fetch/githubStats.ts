import { queryOptions } from '@tanstack/react-query';

export const getRepositories = (user: string) =>
    queryOptions({
        queryKey: ['repositories', user],
        queryFn: () => fetch(`https://api.github.com/users/${user}/repos`).then((res) => res.json()) as Promise<Repository[]>,
    });
