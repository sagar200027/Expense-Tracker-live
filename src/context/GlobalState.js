import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  // if amount is -ve then its an expense else it will salary
  transactions: []
};

// create contextMenuBuilder

export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({ 
        type: "DELETE_TRANSACTION",
        payload: id 
    });
  }

  function addTransaction(transaction) {
    dispatch({ 
        type: "ADD_TRANSACTION",
        payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
