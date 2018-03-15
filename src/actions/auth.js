import actionIds from '../constants/actions';
import * as api from './api';

const login = () => dispatch => {
  return dispatch({
    type: actionIds.SET_TOKEN,
    token: 'sd76sd8-7sdf7sd8-sdf78s7df8',
  });
};

const logout = () => dispatch => {
  return dispatch({
    type: actionIds.CLEAR_TOKEN,
    token: 'sd76sd8-7sdf7sd8-sdf78s7df8',
  });
};

const getProfile = () => dispatch => {
  return api.getProfile()
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

export default { login, logout, getProfile };
