import actionIds from '../constants/actions';

const openModal = (id) => dispatch => {
  return dispatch({
    type: actionIds.OPEN_MODAL,
    id,
  });
};

const closeModal = () => dispatch => {
  return dispatch({
    type: actionIds.CLOSE_MODAL,
  });
};

export default { openModal, closeModal };
