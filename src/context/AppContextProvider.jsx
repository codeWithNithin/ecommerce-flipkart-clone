import { useState } from "react";
import AppContext from "./appContext";

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
