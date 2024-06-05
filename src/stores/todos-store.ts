import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { Todo, getTodos } from "../api/getTodos";

class TodosStore {
  constructor() {
    makeAutoObservable(this);
  }

  todos?: IPromiseBasedObservable<Todo[]>;

  fetchTodosAction = () => {
    this.todos = fromPromise(getTodos());
  };
}

const todosStore = new TodosStore();
export default todosStore;
