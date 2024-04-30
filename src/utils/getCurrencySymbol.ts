const getCurrencySymbol = (locale: string, currency: string) => {
  return (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();
};

export default getCurrencySymbol;
