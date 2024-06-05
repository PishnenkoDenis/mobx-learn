import axios from "axios";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => (await axios.get<TPost[]>(POSTS_URL)).data;
