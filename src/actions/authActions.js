import users from '../users.json';

export const login = (username, password) => {
  return (dispatch) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
