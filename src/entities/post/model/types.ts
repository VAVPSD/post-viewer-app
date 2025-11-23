export interface PostDto {
  id: number;
  title: string;
  text: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
