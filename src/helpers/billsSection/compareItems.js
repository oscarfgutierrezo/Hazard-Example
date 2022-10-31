// Función para comparar dos valores, se usa en la ejecución del metodo .sort

export const compareItems = ( item1, item2 ) => {
  if (item1 > item2) {
    return 1
  } else if (item1 < item2) {
    return -1
  } else {
    return 0
  }
}