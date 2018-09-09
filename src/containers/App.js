/**
 * Created by Ace on 2018. 9. 8..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMemoList } from '../actions'
import Header from './Header'
import Memo from '../components/Memo'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const MemoListWrapper = styled.div`
  width: 40%;
  height: 100%;
  float: left;
  border-right: 1px solid #F3F1F1; 
  position: absolute;
`;

const MemoFormWrapper = styled.div`
  float: right;
  width: 60%;
`

class App extends Component {
  componentWillMount() {
    this.props.getMemoList();
  }
  render() {
    const { memos } = this.props;
    if (!memos) {
      return <div>로딩 중..</div>
    }
    return (
      <Wrapper>
        <button onClick={this.props.addMemo}>
          작성하기
        </button>
        <Header />
        <MemoListWrapper>
          {
            memos.map((memo, index) => {
              return (
              <Memo props={memo} key={index}/>
              )
            })
          }
        </MemoListWrapper>
        <MemoFormWrapper></MemoFormWrapper>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    memos: state.memo
  }
}

export default connect(mapStateToProps, { getMemoList })(App);