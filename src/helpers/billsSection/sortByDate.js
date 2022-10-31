// Comparar dos montos de dinero en formato dd/mm/aaaa

import { compareItems } from '../../helpers';

export const sortByDate = ( array, filter ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    // Covertir fecha de formato dd/mm/yyyy a formato yyyy-mm-dd y ejecutar método Date.parse para tener datos comparables (numbers)
    const [day1, month1, year1] = item1.fechaPago.split('/');
    const [day2, month2, year2] = item2.fechaPago.split('/');
    const date01 = Date.parse(`${year1}/${month1}/${day1}`);
    const date02 = Date.parse(`${year2}/${month2}/${day2}`);

    // Reordenar el array mediante la comparación de los datos
    return compareItems( date01, date02 );
  });

  // Retornar array en orden ascendente o descendente en función del filtro seleccionado
  if (filter === 'fecha-ant') return arrayOrdened;
  if (filter === 'fecha-rec') return arrayOrdened.reverse();
};