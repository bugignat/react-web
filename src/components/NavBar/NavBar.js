import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import Headroom from 'headroom.js';
import { Modal } from '../../actions';
import s from './NavBar.styl';

class NavBar extends React.Component {

  headroom = null;

  componentDidMount() {
    this.headroom = new Headroom(this.nav, {
      offset: 560,
      tolerance : {
        up : 0,
        down : 0,
      },
      classes: {
        pinned: s.pinned,
        unpinned: s.unpinned,
      }
    });
    this.headroom.init();
  }

  componentWillUnmount() {
    this.headroom.destroy();
  }

  render() {
    return (
      <nav className={s.container} ref={el => this.nav = el}>
        <div className={s.wrapper}>
          <div>
            <div className={s.logo}>Logo</div>
          </div>
          <div>
            <NavLink exact to="/" className={s.link} activeClassName={s.linkActive}>Home</NavLink>
            <NavLink to="/contacts/" className={s.link} activeClassName={s.linkActive}>Contacts</NavLink>
            <button onClick={() => this.props.dispatchOpenModal('login')}>Log In</button>
            <button onClick={() => this.props.dispatchOpenModal('signup')}>Sign Up</button>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchOpenModal: bindActionCreators(Modal.openModal, dispatch),
  dispatchCloseModal: bindActionCreators(Modal.closeModal, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
