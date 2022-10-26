import { compareItems } from "../helpers";

export const sortByAmount = ( array, type ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    const item1Format = Number(item1.monto.replace(/[^0-9]+/g,""));
    const item2Format = Number(item2.monto.replace(/[^0-9]+/g,""));
    return compareItems( item1Format, item2Format );
  });

  if (type === 'monto-asc') return arrayOrdened;
  if (type === 'monto-des') return arrayOrdened.reverse();
};