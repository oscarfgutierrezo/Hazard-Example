export const sortByFolio = ( array, filter ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    return item1.folio - item2.folio;
  });
  if (filter === 'folio-asc') return arrayOrdened;
  if (filter === 'folio-des') return arrayOrdened.reverse();
};