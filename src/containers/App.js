/**
 * Created by Ace on 2018. 9. 8..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getMemoList } from '../actions'
import Header from './Header'
import MemoForm from './MemoForm'
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
      <Router>
        <Wrapper>
          <button onClick={this.props.addMemo}>
            작성하기
          </button>
          <Header />
          <MemoListWrapper>
            {
              memos.map((memo, index) => {
                return (
                  <Link to={'/' + memo.id}><Memo props={memo} key={index}/></Link>
                )
              })
            }
          </MemoListWrapper>
          <MemoFormWrapper>
            {
              memos.map((memo, index) => {
                return (
                  <Route
                    key={memo.id}
                    path={'/' + memo.id}
                    id={memo.id}
                    render={
                      ()=><MemoForm id={memo.id} />
                    }
                  />
                )
              })
            }
          </MemoFormWrapper>
        </Wrapper>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    memos: state.memo.all
  }
}

export default connect(mapStateToProps, { getMemoList })(App);