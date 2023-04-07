import usePosts from "@/hooks/usePosts";
import React from "react";
import PostItem from "./PostItem";
import { Prisma } from "@prisma/client";
interface PostFeedProps {
  userId?: string;
}
type PostWithData = Prisma.PostGetPayload<{
  include: { user: true; comments: true };
}>;

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);
  return (
    <>
      {posts.map((post: Prisma.PostGetPayload<{ include: { user: true } }>) => (
        <PostItem userId={userId} key={post.id} data={post as PostWithData} />
      ))}
    </>
  );
};

export default PostFeed;
