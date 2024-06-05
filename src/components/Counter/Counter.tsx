import { observer } from "mobx-react-lite";
import { useStores } from "../../Context/root-store-context";
import { useEffect } from "react";
// import counterStore from "../../stores/counter-store";

export const Counter = observer(() => {
  // const { counter, increment, decrement, total } = counterStore;
  const {
    counter: {
      counter,
      increment,
      decrement,
      total,
      destroyAutorun,
      destroyReaction,
    },
  } = useStores();

  useEffect(() => {
    return () => {
      destroyAutorun();
      destroyReaction();
    };
  }, [destroyAutorun, destroyReaction]);

  return (
    <div>
      <button onClick={() => increment()}>+</button>
      <span>{counter}</span>
      <button onClick={() => decrement()}>-</button>
      <br />
      <span>{total}</span>
    </div>
  );
});
