export const getFirstLetter = (input: string): string => {
  if (input?.length === 0) {
    return "";
  }
  return input?.charAt(0)?.toUpperCase();
};

export const validatePassword = (value: string) => {
  if (!value) return "La contraseña es obligatoria";
  if (value.length < 7) return "La contraseña debe tener al menos 7 caracteres";
  if (!/[a-zA-Z]/.test(value))
    return "La contraseña debe contener al menos una letra";
  if (!/\d/.test(value))
    return "La contraseña debe contener al menos un número";
  return true; // Retorna true si la validación es exitosa
};

export const formatCurrency = (
  value: any,
  locale = "es-ES",
  currency = "EUR"
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
};
