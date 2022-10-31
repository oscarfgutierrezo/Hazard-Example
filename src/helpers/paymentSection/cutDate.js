export const cutDate = (fecha) => {
  // Convertir fecha de formato dd mm, yyyy a formato dd mm
  return fecha.split(',')[0]
}