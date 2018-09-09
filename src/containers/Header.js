/**
 * Created by Ace on 2018. 9. 9..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addMemo } from '../actions'

const HeaderWrapper = styled.div`
  width: 100%;
  height: 77px;
  background-color: #fff;
  border-bottom: 1px solid #F3F1F1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavWrapper = styled.div`
  margin-right: 35px;
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
  render() {
    return (
      <HeaderWrapper>
        <NavWrapper>
          <Button color={'#5cb85c'} onClick={this.props.addMemo}>
            작성하기
          </Button>
          <Button color={'#d9534f'}>
            삭제하기
          </Button>
        </NavWrapper>
      </HeaderWrapper>
    )
  }
}

export default connect(null, { addMemo })(Header);