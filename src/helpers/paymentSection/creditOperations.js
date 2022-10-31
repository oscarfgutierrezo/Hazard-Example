export const creditOperations = (creditLine, creditSpent) => {
  // Calcular el crédito disponible
  const creditAvailable = creditLine - creditSpent;

  // Calcular el porcentaje que representa el crédito consumido
  const percentCreditSpent = Math.round((creditSpent * 100) / creditLine).toString();

  return {
    creditAvailable,
    percentCreditSpent
  }
}