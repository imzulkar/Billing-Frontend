// Set access token and refresh token to localstorage
const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

// Get access token from localstorage
const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

// Get refresh token from localstorage
const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

// Remove access token and refresh token from localstorage
const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const setLocalCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getLocalCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export {
  setTokens,
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setLocalCart,
  getLocalCart,
};
