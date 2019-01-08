import React from 'react';
import Modal from 'react-responsive-modal';
import Form from './Form';
import '../components/Components.css';
import { connect } from 'react-redux';
import { closeForm } from '../actions/actions';

const ModalHandler = props =>

  <div>
    <Modal
      open={props.openForm}
      onClose={props.closeForm}
      className='styles_modal__gNwvD'
      showCloseIcon={false}
      >
      <Form/>
    </Modal>
  </div>


const mapStateToProps = state => ({
  openForm: state.mainReducer.openForm
});

export default connect(mapStateToProps, { closeForm })(ModalHandler);
