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
  float: left;
  width: 40%;
`

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
    memos: state.memo[0]
  }
}

export default connect(mapStateToProps, { getMemoList })(App);