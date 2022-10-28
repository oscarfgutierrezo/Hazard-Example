import { useState } from 'react';

export const useCheckedChart = (array) => {
  const [checkedState, setCheckedState] = useState(new Array(array.length).fill(true));
  
  const handleOnChecked = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  
  return {
    checkedState,
    handleOnChecked
  }
}
