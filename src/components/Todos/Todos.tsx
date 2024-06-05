import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStores } from "../../Context/root-store-context";
// import todosStore from "../../stores/todos-store";

export const Todos = observer(() => {
  // const { todos, fetchTodosAction } = todosStore;
  const {
    todos: { todos, fetchTodosAction },
  } = useStores();

  useEffect(() => {
    fetchTodosAction();
  }, [fetchTodosAction]);

  if (!todos) {
    return null;
  }

  return todos.case({
    pending: () => <h2>...Loading</h2>,
    rejected: () => <h2>Something went wrong</h2>,
    fulfilled: (todos) => (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    ),
  });
});
