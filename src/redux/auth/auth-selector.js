// Селекторы состояния

const getIsLoggedin = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedin,
  getUserName,
  getToken,
};
export default authSelectors;
