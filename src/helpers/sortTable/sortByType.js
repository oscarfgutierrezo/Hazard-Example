import { compareItems } from '../../helpers';

export const sortByType = ( array, type ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    const item1Format = item1.tipo.toLowerCase().replace(' ', '');
    const item2Format = item2.tipo.toLowerCase().replace(' ', '');
    return compareItems( item1Format, item2Format )
    
  });

  if (type === 'tipo-ced') return arrayOrdened;
  if (type === 'tipo-noced') return arrayOrdened.reverse();
};