import { compareItems } from "../helpers";

export const sortByDate = ( array, type ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    const [day1, month1, year1] = item1.fechaPago.split('/');
    const [day2, month2, year2] = item2.fechaPago.split('/');
    const item1Format = Date.parse(`${year1}/${month1}/${day1}`);
    const item2Format = Date.parse(`${year2}/${month2}/${day2}`);

    return compareItems( item1Format, item2Format );
  });

  if (type === 'fecha-ant') return arrayOrdened;
  if (type === 'fecha-rec') return arrayOrdened.reverse();
};