import { compareItems } from '../../helpers';

export const sortByProvider = ( array, filter ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    // Convertir los strings a minúscula para realizar la comparación
    const provider01 = item1.proveedor.toLowerCase();
    const provider02 = item2.proveedor.toLowerCase();
    
    // Reordenar el array mediante la comparación de los datos
    return compareItems( provider01, provider02 )
  });

  // Retornar array en orden ascendente o descendente en función del filtro seleccionado
  if (filter === 'proveedor-asc') return arrayOrdened;
  if (filter === 'proveedor-des') return arrayOrdened.reverse();
};