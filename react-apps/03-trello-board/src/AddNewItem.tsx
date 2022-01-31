import React from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  toggleButtonText: string;
  onAdd(text: string): void;
  dark?: boolean;
};

export const AddNewItem = ({
  toggleButtonText,
  onAdd,
  dark,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
