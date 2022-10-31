import { useState } from 'react';

export const useCheckedChart = (array) => {
  // Crear array para manejar con booleanos el estado de cada uno de los checkbox
  const [checkedState, setCheckedState] = useState(new Array(array.length).fill(true));
  
  // Alternar el valor del booleano asociado a cada checkbox
  const handleChecked = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  
  return {
    checkedState,
    handleChecked
  }
}
