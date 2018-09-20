/**
 * Created by Ace on 2018. 9. 8..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getMemoList } from '../actions'
import Header from 'containers/Header'
import MemoForm from 'containers/MemoForm'
import Memo from 'components/Memo'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify";

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
  overflow: scroll;
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar { 
    display: none !important; // 윈도우 크롬 스크롤바 감춤
  }
`;

const MemoFormWrapper = styled.div`
  float: right;
  width: 60%;
`

const StyledLink = styled(Link)`
  &:link {text-decoration: none; color: black;}
  &:visited {text-decoration: none; color: black;}
  &:active {text-decoration: none; color: black;}
  &:hover {text-decoration: none; color: black;}
`;

class App extends Component {
  componentDidMount() {
    this.props.getMemoList();
  }

  render() {
    const { memos, selectMemo } = this.props;
    if (!memos) {
      return <div>로딩 중..</div>
    }
    return (
      <Router>
        <Wrapper>
          <Header />
          <MemoListWrapper>
            {
              memos.map((memo, index) => {
                if (selectMemo) {
                  let currentMemo = false;
                  if (memo.id === selectMemo.id) {
                    currentMemo = true;
                  }
                  return (
                    <div>
                      <StyledLink to={`/${memo.id}`}><Memo memo={memo} key={index} currentMemo={currentMemo}/></StyledLink>
                    </div>

                  )
                }
              })
            }
          </MemoListWrapper>
          <MemoFormWrapper>
            {
              memos.map(memo => {
                return (
                  <Route
                    path={`/${memo.id}`}
                    render={props => <MemoForm id={memo.id} />}
                  />
                )
              })
            }
          </MemoFormWrapper>
          <ToastContainer autoClose={2000} position={"top-center"}/>
        </Wrapper>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    memos: state.memo.all,
    selectMemo: state.memo.memo
  }
}

export default connect(mapStateToProps, { getMemoList })(App);