import { useState } from "react";
import { filterByLength } from "../../../features/PostLengthFilter/lib/filterByLength";
import { LengthFilter } from "../../../features/PostLengthFilter/model/consts";
import type { LengthFilterType } from "../../../features/PostLengthFilter/model/types";
import PostLengthFilter from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../../../features/PostList/model/hooks/usePosts";
import PostList from "../../../widgets/PostList/PostList";

export const PostsPage = () => {
  const { posts, isLoading, error } = usePosts();
  const [lengthFilter, setLengthFilter] = useState<LengthFilterType>(LengthFilter.All);

  const filteredPosts = filterByLength(posts, lengthFilter);

  if (error) {
    return (
      <section>
        <p>Не удалось загрузить посты: {error}</p>
      </section>
    );
  }

  return (
    <section>
      <PostLengthFilter value={lengthFilter} onChange={setLengthFilter} />
      <PostList isLoading={isLoading} posts={filteredPosts} />
    </section>
  );
};
