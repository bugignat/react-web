import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../actions';
import s from './NavBar.styl';

class NavBar extends React.Component {

  render() {
    return (
      <nav className={s.container}>
        <div>
          <div className={s.logo}>Logo</div>
        </div>
        <div>
          <NavLink exact to="/" className={s.link} activeClassName={s.linkActive}>Home</NavLink>
          <NavLink to="/contacts" className={s.link} activeClassName={s.linkActive}>Contacts</NavLink>
          <button onClick={() => this.props.dispatchOpenModal('login')}>Log In</button>
          <button onClick={() => this.props.dispatchOpenModal('signup')}>Sign Up</button>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchOpenModal: bindActionCreators(Modal.openModal, dispatch),
  dispatchCloseModal: bindActionCreators(Modal.closeModal, dispatch),
});

export default connect(null, mapDispatchToProps)(NavBar);
