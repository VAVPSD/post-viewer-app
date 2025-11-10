export interface PostsDto {
    id: number;
    title: string;
}

export const mockPosts: PostsDto[] = [
    { id: 1, title: 'Первый пост' },
    { id: 2, title: 'Второй пост' },
    { id: 3, title: 'Третий пост' },
    { id: 4, title: 'Четвертый пост с достаточно длинным заголовком' },
    { id: 5, title: 'Пятый пост с заголовком средней длины' },
];
