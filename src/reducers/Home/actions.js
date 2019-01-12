export const actions = {
  SET_MOBILE_MENU_OPEN: 'SET_MOBILE_MENU_OPEN',
};

export const setMobileMenuActionCreator = isOpen => ({ type: actions.SET_MOBILE_MENU_OPEN, payload: { isOpen } });
