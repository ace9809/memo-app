/**
 * Created by Ace on 2018. 9. 18..
 */
import React from 'react';
import ResponsiveModal from 'react-responsive-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import messages from './messages';

const H1 = styled.h1`
  font-size: 40px;
`;

const Modal = (props) => {
  const {
    open,
    onClose
  } = props;
  return (
    <ResponsiveModal open={open} onClose={onClose} center >
      <H1>{messages.title.defaultMessage}</H1>
      <br />
      <p>{messages.appIntroduceDescription.defaultMessage}</p><br />
      <p><strong>{messages.useDescription.defaultMessage}</strong></p><br />
      <p>{messages.addMemoDescription.defaultMessage}</p><br />
      <p>{messages.deleteMemoDescription.defaultMessage}</p><br />
      <p>{messages.modifyMemoDescription.defaultMessage}</p><br /><br /><br />
      <p>{messages.bugReport.defaultMessage} <a href={messages.githubUrl.defaultMessage} target="_blank">{messages.githubUrl.defaultMessage}</a></p>

    </ResponsiveModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  open: false,
  onClose: () => {}
};

export default Modal;