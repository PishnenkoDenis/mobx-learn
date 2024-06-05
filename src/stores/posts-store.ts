import { makeAutoObservable, runInAction } from "mobx";
import { TPost, getPosts } from "../api/getPosts";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

class PostsStore {
  posts: TPost[] | [] = [];
  isLoading = false;

  optimizedPosts?: IPromiseBasedObservable<TPost[]>;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosts = async () => {
    try {
      this.isLoading = true;
      const response = await getPosts();
      //runInAction() позволяет накопить необходимые изменения(батчинг)
      //и обновить состояние с накопленными изменениями один раз, а не каждый раз на каждое изменение
      runInAction(() => {
        this.posts = response;
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
      this.isLoading = false;
    }
  };

  //оптимизированный вариант вызова асинхронных функций
  //с помошью функций mobx-utils
  fetchPostsAction = () => {
    this.optimizedPosts = fromPromise(getPosts());
  };
}

const postsStore = new PostsStore();
export default postsStore;
