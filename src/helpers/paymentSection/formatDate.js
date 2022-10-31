export const formatDate = (fecha) => {
  // Convertir fecha de formato (Ejemplo 15 Octubre, 2021) a formato (Ejemplo 15 Oct, 2021)
  const stringDivided = fecha.split(',')
  stringDivided[0] = stringDivided[0].substring(0, 6)
  return stringDivided.join(',')
}