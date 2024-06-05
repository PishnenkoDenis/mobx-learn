import { observer } from "mobx-react-lite";
// import postsStore from "../../stores/posts-store";
import { useEffect } from "react";
import { useStores } from "../../Context/root-store-context";

export const Posts = observer(() => {
  // const { optimizedPosts, fetchPostsAction } = postsStore;
  const {
    posts: { optimizedPosts, fetchPostsAction },
  } = useStores();

  useEffect(() => {
    fetchPostsAction();
  }, [fetchPostsAction]);

  if (optimizedPosts?.state === "pending") {
    return <h2>...Loading</h2>;
  }

  if (optimizedPosts?.state === "rejected") {
    return <h2>Something went wrong</h2>;
  }
  return (
    <ul>
      {optimizedPosts?.value &&
        optimizedPosts.value.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <span>{post.body}</span>
          </li>
        ))}
    </ul>
  );
});
