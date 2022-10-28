import { useEffect, useState } from 'react';
import { sortByFolio, sortByProvider, sortByType, sortByAmount, sortByDate } from '../helpers';

export const useSort = ( array, filter ) => {
  const [sortedTable, setSortedTable] = useState(array);
  
  useEffect(() => {
    switch (filter) {
      case 'folio-asc':
      case 'folio-des':
        setSortedTable(sortByFolio(array, filter));
        break;
      case 'proveedor-asc':
      case 'proveedor-des':
        setSortedTable(sortByProvider(array, filter));
        break;
      case 'tipo-ced':
      case 'tipo-noced':
        setSortedTable(sortByType(array, filter));
        break;
      case 'monto-asc':
      case 'monto-des':
        setSortedTable(sortByAmount(array, filter));
        break;
      case 'fecha-ant':
      case 'fecha-rec':
        setSortedTable(sortByDate(array, filter));
        break;
      default:
        break;
    };
  }, [filter]);

  return {
    sortedTable,
  }
}
