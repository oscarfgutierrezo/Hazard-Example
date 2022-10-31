import { useState } from 'react';

export const useCheckedBills = (bills) => {
  const [billsChecked, setBillsCkecked] = useState([]);
  
  // Agregar o eliminar el nnúmero de cada folio del array en función del estado del checkbox asociado a cada uno
  const handleOnChecked = ({ target }) => {
    const numberFolio = Number(target.value)
    if(billsChecked.includes(numberFolio)) {
      setBillsCkecked( billsChecked.filter( bill => bill !== numberFolio ) )
    } else {
      setBillsCkecked( [...billsChecked, numberFolio] )
    }
  };

  // Agregar todos los folios al array o vaciarlo en función del estado del checkbox que permite seleccionarlos todos
  const handleCheckAll = ({ target }) => {
    if (target.checked) {
      setBillsCkecked(bills.map( bill => bill.folio ))
    } else {
      setBillsCkecked([])
    }
  };
  
  return {
    billsChecked,
    handleOnChecked,
    handleCheckAll
  }
}
