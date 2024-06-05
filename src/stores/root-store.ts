import counterStore from "./counter-store";
import photosStore from "./photos-store";
import postsStore from "./posts-store";
import todosStore from "./todos-store";

class RootStore {
  posts = postsStore;
  counter = counterStore;
  todos = todosStore;
  photos = photosStore;
}

export default RootStore;
