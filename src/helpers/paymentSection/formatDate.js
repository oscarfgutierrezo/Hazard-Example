export const formatDate = (fecha) => {
  const stringDivided = fecha.split(',')
  stringDivided[0] = stringDivided[0].substring(0, 6)
  return stringDivided.join(',')
}