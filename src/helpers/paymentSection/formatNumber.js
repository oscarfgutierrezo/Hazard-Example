export const formatNumber = (number) => {
  // Convertir number a string con punto cada 3 dígitos
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}