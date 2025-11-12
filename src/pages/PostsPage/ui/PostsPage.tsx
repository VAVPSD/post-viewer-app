import { useState } from "react";
import { filterByLength } from "../../../features/PostLengthFilter/lib/filterByLength";
import { LengthFilter } from "../../../features/PostLengthFilter/model/consts";
import type { LengthFilterType } from "../../../features/PostLengthFilter/model/types";
import PostLengthFilter from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import { mockPosts } from "../../../mock/posts";
import PostList from "../../../widgets/PostList/PostList";

export const PostsPage = () => {
  const [lengthFilter, setLengthFilter] = useState<LengthFilterType>(LengthFilter.All);

  const filteredPosts = filterByLength(mockPosts, lengthFilter);
  const loading = false;

  return (
    <section>
      <PostLengthFilter value={lengthFilter} onChange={setLengthFilter} />
      <PostList isLoading={loading} posts={filteredPosts} />
    </section>
  );
};
