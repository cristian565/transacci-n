export function parseCurrency(value:number, numFractionDigits = 2) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: numFractionDigits,
    }).format(value);
  }