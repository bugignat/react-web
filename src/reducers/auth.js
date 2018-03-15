import actionsIds from '../constants/actions';

const initialState = { token: '' };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsIds.SET_TOKEN:
      return {
        token: action.token,
      };
    case actionsIds.CLEAR_TOKEN:
      return {
        token: '',
      };
    default:
      return state;
  }
};
