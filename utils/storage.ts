export const STORAGE_CUSTOMER_SESSION = "customerSessionLoad";

export const loadUserSessionStorage = (user: any) => {
  localStorage.setItem(STORAGE_CUSTOMER_SESSION, JSON.stringify(user));
};

export const getUserData = () => {
  return localStorage.getItem(STORAGE_CUSTOMER_SESSION);
};

export const checkCustomerSessionStorage = () => {
  if (localStorage.getItem(STORAGE_CUSTOMER_SESSION)) {
    return true;
  }
  return false;
};
export const deleteItemStorage = (key: string) => {
  localStorage.removeItem(key);
};
