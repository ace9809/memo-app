/**
 * Created by Ace on 2018. 9. 9..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Modal from '../components/Modal/index';
import { addMemo } from '../actions'

const HeaderWrapper = styled.div`
  width: 100%;
  height: 77px;
  background-color: #fff;
  border-bottom: 1px solid #F3F1F1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-weight:bold
  font-size: 30px;
  margin-left: 35px;
`;

const NavWrapper = styled.div`
  margin-right: 25px;
  display: flex;
`;

const Button = styled.button`
  border-radius: 6px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  margin-left: 20px;
  background-color: ${(props) => props.color};
  outline: 0;
  border: 0;
  color: white;
`;

class Header extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <HeaderWrapper>
        <TitleWrapper>
          Symphony Note
        </TitleWrapper>
        <Modal open={open} onClose={this.onCloseModal} center>
        </Modal>
        <NavWrapper>
          <Button color={'#5cb85c'} onClick={this.onOpenModal}>
            공지사항
          </Button>
          <Button color={'#5cb85c'} onClick={this.props.addMemo}>
            작성하기
          </Button>
        </NavWrapper>
      </HeaderWrapper>
    )
  }
}

export default connect(null, { addMemo })(Header);