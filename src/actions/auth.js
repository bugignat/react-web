import actionIds from '../constants/actions';
import * as api from './api';

const setToken = () => dispatch => {
  return api.getNumbers()
    .then(response => {
      console.log(response);
      dispatch({
        type: actionIds.SET_TOKEN,
        token: 'sd76sd8-7sdf7sd8-sdf78s7df8',
      });
    })
    .catch(error => {
      console.error('error', error)
    });
};

const clearToken = () => {
  return {
    type: actionIds.CLEAR_TOKEN,
  };
};

export default { setToken, clearToken };
