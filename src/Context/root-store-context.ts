import { createContext, useContext } from "react";
import RootStore from "../stores/root-store";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error("Wrapp your app with Provider");
  }

  return context;
};
