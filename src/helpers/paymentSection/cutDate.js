// Convertir fecha de formato dd mm, yyyy a formato dd mm

export const cutDate = (fecha) => {
  return fecha.split(',')[0]
}