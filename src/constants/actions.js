import keymirror from 'keymirror';

const actionIds = keymirror({
  SET_TOKEN: null,
  CLEAR_TOKEN: null,

  OPEN_MODAL: null,
  CLOSE_MODAL: null,
});

export default { ...actionIds };
