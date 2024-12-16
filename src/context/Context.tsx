import React, { ReactNode, useContext, useMemo, useReducer } from "react";
import { reducer, state, Reducer } from "../model/ContextModel";
interface ContextModel {
  children: ReactNode;
}
const ContextProvider = React.createContext<Reducer | undefined>(undefined);
function Context({ children }: ContextModel) {
  const [initialState, dispatch] = useReducer(reducer, state);
  const memorize = useMemo(() => {
    return { initialState, dispatch };
  }, [initialState, dispatch]);
  return (
    <ContextProvider.Provider value={memorize}>
      {children}
    </ContextProvider.Provider>
  );
}
export const useContextPortfolio = () => useContext(ContextProvider);
export default Context;
