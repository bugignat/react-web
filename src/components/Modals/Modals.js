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
};

class Modals extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.modal.isOpen}
        onRequestClose={this.props.dispatchCloseModal}
        className={className.content}
        overlayClassName={className.overlay}
        closeTimeoutMS={400}
        contentLabel="Example Modal"
      >
        <div>{this.props.modal.id || 'Modal'}</div>
        <div>
          <input type="tel" placeholder="Phone" />
        </div>
        <div>
          <button onClick={this.props.dispatchCloseModal}>close</button>
        </div>
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
