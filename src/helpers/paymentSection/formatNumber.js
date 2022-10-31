// Convertir number a string con punto cada 3 dígitos

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}