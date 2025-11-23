import { useEffect, useState } from 'react';
import type { PostDto } from '../../../../entities/post/model/types';

export function usePosts() {
    const [posts, setPosts] = useState<PostDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

        setIsLoading(true);
        setError(null);

        fetch(POSTS_URL, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error(`Network error: ${response.status} ${response.statusText}`);
                return response.json() as Promise<PostDto[]>;
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((err: unknown) => {
                if (err instanceof DOMException && err.name === 'AbortError') return;

                const message = err instanceof Error ? err.message : 'Не удалось загрузить посты';
                setError(message);
            })
            .finally(() => {
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { posts, isLoading, error };
}
