// Comparar dos montos de dinero en formato $xxx.xxx.xxx

import { compareItems } from '../../helpers';

export const sortByAmount = ( array, filter ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    // Eliminar caracteres diferentes a digitos (0-9) y convertir strings a números
    const monto01 = Number(item1.monto.replace(/[^0-9]+/g,""));
    const monto02 = Number(item2.monto.replace(/[^0-9]+/g,""));

    // Reordenar el array mediante la comparación de los datos
    return compareItems( monto01, monto02 );
  });

  // Retornar array en orden ascendente o descendente en función del filtro seleccionado
  if (filter === 'monto-asc') return arrayOrdened;
  if (filter === 'monto-des') return arrayOrdened.reverse();
};