import { routes } from "../../../shared/routes";
import type { Tab } from "./types";

export const TABS: Tab[] = [
  { label: 'Все посты', to: () => routes.posts() },
  { label: 'Посты пользователя', to: (id) => routes.userPosts(id) },
  { label: 'Альбомы пользователя', to: (id) => routes.userAlbums(id) },
  { label: 'Задачи пользователя', to: (id) => routes.userTodos(id) },
];
