export const creditOperations = (creditLine, creditSpent) => {
  const creditAvailable = creditLine - creditSpent;
  const percentCreditSpent = Math.round((creditSpent * 100) / creditLine).toString();

  return {
    creditAvailable,
    percentCreditSpent
  }
}