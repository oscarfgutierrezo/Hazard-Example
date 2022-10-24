export const creditOperations = (creditLine) => {
  const creditSpent = 150000000
  const creditAvailable = creditLine - creditSpent;
  const percentCreditSpent = Math.round((creditSpent * 100) / creditLine).toString();

  return {
    creditSpent,
    creditAvailable,
    percentCreditSpent
  }
}