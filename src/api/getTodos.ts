import axios from "axios";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const USERS_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => (await axios.get(USERS_URL)).data;
