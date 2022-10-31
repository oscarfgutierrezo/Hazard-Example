// Convertir fecha de formato dd mm, yyyy a formato dd mm

export const cutDate = (fecha) => {
  const date = (fecha.split(',')[0]).split(" ")
  const day = date[0];
  const month = date[1];

  return {
    day,
    month
  }
}