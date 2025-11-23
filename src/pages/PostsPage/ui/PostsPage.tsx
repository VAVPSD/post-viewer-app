import { useState, useMemo } from "react";
import { filterByLength } from "../../../features/PostLengthFilter/lib/filterByLength";
import { LengthFilter } from "../../../features/PostLengthFilter/model/consts";
import type { LengthFilterType } from "../../../features/PostLengthFilter/model/types";
import PostLengthFilter from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import PostList from "../../../widgets/PostList/PostList";
import { useGetPostsQuery } from "../../../entities/post/api/postsApi";
import type { PostDto, Post } from "../../../entities/post/model/types";
import styles from "./PostsPage.module.css";

const adaptPost = (post: Post): PostDto => ({
  id: post.id,
  title: post.title,
  text: post.body,
});

export const PostsPage = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  const [lengthFilter, setLengthFilter] = useState<LengthFilterType>(LengthFilter.All);

  const adaptedPosts = useMemo(
    () => (data ?? []).map(adaptPost),
    [data]
  );

  const filteredPosts = filterByLength(adaptedPosts, lengthFilter);

  if (error) {
    return (
      <section className={styles.container}>
        <p>Не удалось загрузить посты</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <PostLengthFilter value={lengthFilter} onChange={setLengthFilter} />
      <PostList isLoading={isLoading} posts={filteredPosts} />
    </section>
  );
};
