import usePosts from "@/hooks/usePosts";
import React from "react";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId as string);

  return (
    <>
      {posts &&
        posts.map((post: Record<string, any>) => (
          <PostItem userId={userId} key={post.id} data={post} />
        ))}
    </>
  );
};

export default PostFeed;
