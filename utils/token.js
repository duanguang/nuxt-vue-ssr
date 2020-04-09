/**
 * 设置localStorage中的token
 * @param {*} token
 */
export const setToken = (token) => {
  window.localStorage.setItem('token', token);
}

/**
 * 从localStorage中获取token
 */
export const getToken = () => {
  return window.localStorage.getItem('token');
}

/**
 * 移除localStorage中的token
 */
export const removeToken = () => {
  window.localStorage.removeItem('token');
}
