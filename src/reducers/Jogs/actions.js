export const actions = {
  GET_JOGS: 'GET_JOGS',
  SET_JOGS: 'SET_JOGS'
};

export const getJogsActionCreator = () => ({ type: actions.GET_JOGS });
export const setJogsActionCreator = jogs => ({ type: actions.SET_JOGS, payload: { jogs } });
