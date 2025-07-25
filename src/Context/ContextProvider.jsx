import React from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const values = {};
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
