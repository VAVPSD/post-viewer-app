import type { PostsDto } from "../../../mock/posts";
import { MEDIUM_MAX, SHORT_MAX } from "../model/consts";
import type { LengthFilterType } from "../model/types";

export const filterByLength = (
    posts: PostsDto[],
    filter: LengthFilterType
): PostsDto[] => {
    switch (filter) {
        case 'short':
            return posts.filter((post) => post.title.length < SHORT_MAX);
        case 'medium':
            return posts.filter((post) => post.title.length >= SHORT_MAX && post.title.length < MEDIUM_MAX);
        case 'long':
            return posts.filter((post) => post.title.length >= MEDIUM_MAX);
        case 'all':
            return posts;
        default: {
            // const _exhaustiveCheck: never = filter;
            return posts;
        }
    }
};
