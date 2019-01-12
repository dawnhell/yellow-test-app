export const actions = {
  LOGIN: 'LOGIN',
  SET_TOKEN: 'SET_TOKEN'
};

export const loginActionCreator = () => ({ type: actions.LOGIN });
export const setTokenActionCreator = token => ({ type: actions.SET_TOKEN, payload: { token } });
