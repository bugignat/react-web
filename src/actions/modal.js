import actionIds from '../constants/actions';

const openModal = (id) => dispatch => {
  return dispatch({
    type: actionIds.OPEN_MODAL,
    id,
  });
};

const closeModal = () => (dispatch, getState) => {
  const id = getState().modal.id;
  return dispatch({
    type: actionIds.CLOSE_MODAL,
    id,
  });
};

export default { openModal, closeModal };
