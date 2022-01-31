import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="TO DO">
        <Card text="Generate app Scaffold" />
      </Column>
      <Column text="Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
