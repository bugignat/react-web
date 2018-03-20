import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { bindActionCreators } from 'redux';
import { Modal } from '../../actions';
import s from './Modals.styl';

ReactModal.setAppElement('#root');

const className = {
  content: {
    base: s.content,
    afterOpen: s.contentAfterOpen,
    beforeClose: s.contentBeforeClose,
  },
  overlay: {
    base: s.overlay,
    afterOpen: s.overlayAfterOpen,
    beforeClose: s.overlayBeforeClose,
  },
  bodyOpen: s.bodyOpen
};

class Modals extends React.Component {

  renderLogIn() {
    if (this.props.modal.id !== 'login') {
      return null;
    }

    return (
      <div>
        <div>Log In</div>
        <label>
          <div>Name</div>
          <input type="text" placeholder="Name" />
        </label>
        <label>
          <div>Phone</div>
          <input type="tel" placeholder="Phone" />
        </label>
        <label>
          <div>E-mail</div>
          <input type="mail" placeholder="E-mail" />
        </label>
        <label>
          <div>Password</div>
          <input type="password" placeholder="Password" />
        </label>
        <div>
          <button>Submit</button>
        </div>
      </div>
    );
  }

  renderSignUp() {
    if (this.props.modal.id !== 'signup') {
      return null;
    }

    return (
      <div>
        <div>Sign Up</div>
        <label>
          <div>Name</div>
          <input type="text" placeholder="Name" />
        </label>
        <label>
          <div>Phone</div>
          <input type="tel" placeholder="Phone" />
        </label>
        <label>
          <div>E-mail</div>
          <input type="mail" placeholder="E-mail" />
        </label>
        <label>
          <div>Password</div>
          <input type="password" placeholder="Password" />
        </label>
        <div>
          <button>Submit</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.modal.isOpen}
        onRequestClose={this.props.dispatchCloseModal}
        className={className.content}
        overlayClassName={className.overlay}
        bodyOpenClassName={className.bodyOpen}
        closeTimeoutMS={400}
        contentLabel="Modal"
      >
        <button className={s.close} onClick={this.props.dispatchCloseModal} />
        {this.renderLogIn()}
        {this.renderSignUp()}
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  dispatchOpenModal: bindActionCreators(Modal.openModal, dispatch),
  dispatchCloseModal: bindActionCreators(Modal.closeModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
