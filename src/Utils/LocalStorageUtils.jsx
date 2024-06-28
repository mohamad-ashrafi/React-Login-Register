
// ذخیره توکن در localStorage
export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
  };
  
  // بارگیری توکن از localStorage
  export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };
  
  // حذف توکن از localStorage
  export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
  };
  