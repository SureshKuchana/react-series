import React from "react";
import { AppContainer } from "./styles";

export const App: React.FC = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default App;
