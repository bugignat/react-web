import actionsIds from '../constants/actions';

const initialState = {
  id: null,
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsIds.OPEN_MODAL:
      return {
        id: action.id,
        isOpen: true,
      };
    case actionsIds.CLOSE_MODAL:
      return {
        id: action.id,
        isOpen: false,
      };
    default:
      return state;
  }
};
