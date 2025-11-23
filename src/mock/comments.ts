export interface CommentDto {
  id: number;
  text: string;
}

export const mockComments: CommentDto[] = [
    { id: 1, text: 'Первый комментарий' },
    { id: 2, text: 'Второй комментарий' },
    { id: 3, text: 'Третий комментарий' },
];
