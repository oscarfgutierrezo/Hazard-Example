import { compareItems } from '../../helpers';

export const sortByType = ( array, filter ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    // Convertir los strings a minúsculas y eliminar espacios para realizar la comparación
    const type01 = item1.tipo.toLowerCase().replace(' ', '');
    const type02 = item2.tipo.toLowerCase().replace(' ', '');

    // Reordenar el array mediante la comparación de los datos
    return compareItems( type01, type02 )
  });

  // Retornar array en función del filtro seleccionado
  if (filter === 'tipo-ced') return arrayOrdened;
  if (filter === 'tipo-noced') return arrayOrdened.reverse();
};