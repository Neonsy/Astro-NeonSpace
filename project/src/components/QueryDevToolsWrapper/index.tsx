import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/query';

export default function QueryDevToolsWrapper() {
    return <ReactQueryDevtools client={queryClient} initialIsOpen={false} />;
}
