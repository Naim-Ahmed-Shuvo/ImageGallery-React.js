import { useContext, useReducer, createContext } from "react";

const SateContext = createContext();

export const StateProvider = ({ reducer, initialSate, children }) => {
    return (
      <SateContext.Provider value={useReducer(reducer, initialSate)}>
        {children}
      </SateContext.Provider>
    ); 
}

export const useStateValue = () => useContext(SateContext);