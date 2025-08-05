import React, { useEffect, useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme])
  const values = {
    theme, setTheme,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
