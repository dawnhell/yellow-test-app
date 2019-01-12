export const actions = {
  GET_JOGS: 'GET_JOGS',
  SET_JOGS: 'SET_JOGS',
  SET_IS_FORM_OPEN: 'SET_IS_FORM_OPEN',
  ADD_JOG: 'ADD_JOG'
};

export const getJogsActionCreator = () => ({ type: actions.GET_JOGS });
export const setJogsActionCreator = jogs => ({ type: actions.SET_JOGS, payload: { jogs } });
export const setIsFormOpenActionCreator = isOpen => ({ type: actions.SET_IS_FORM_OPEN, payload: { isOpen } });
export const addJogActionCreator = jog => ({ type: actions.ADD_JOG, payload: { jog }});
