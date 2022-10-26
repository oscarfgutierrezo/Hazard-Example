import { compareItems } from "../helpers";

export const sortByProvider = ( array, type ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    const item1Format = item1.proveedor.toLowerCase();
    const item2Format = item2.proveedor.toLowerCase();
    
    return compareItems( item1Format, item2Format )
  });

  if (type === 'proveedor-asc') return arrayOrdened;
  if (type === 'proveedor-des') return arrayOrdened.reverse();
};