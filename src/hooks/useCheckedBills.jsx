import { useState } from 'react';

export const useCheckedBills = (bills) => {
  const [billsChecked, setBillsCkecked] = useState([]);
  
  const handleOnChecked = ({ target }) => {
    const numberFolio = Number(target.value)
    if(billsChecked.includes(numberFolio)) {
      setBillsCkecked( billsChecked.filter( bill => bill !== numberFolio ) )
    } else {
      setBillsCkecked( [...billsChecked, numberFolio] )
    }
  };

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
