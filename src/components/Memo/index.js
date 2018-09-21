/**
 * Created by Ace on 2018. 9. 10..
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 120px;
  border-bottom: 1px solid #F3F1F1;
  padding: 20px;
  cursor: pointer;
  border: ${props => props.currentMemo ? '2px solid #1abc9c' : ''}
  
  &:hover {
    background-color: #CAC7C7;
  }
`;

const TitleWrapper = styled.div`
  font-weight: bold;
`;

const CreatedWrapper = styled.div`
  margin: 10px 0
`;

const ContentWrapper = styled.div`
  margin: 20px 0 10px 0;
  padding: 5px 0;
  height: 55px;
  overflow: hidden;
`;

const Memo = (props) => {
  const {
    memo,
    currentMemo
  } = props;
  return(
    <Wrapper currentMemo={currentMemo}>
      <TitleWrapper>
        {memo.title}
      </TitleWrapper>
      <CreatedWrapper>
        {memo.created}
      </CreatedWrapper>
      <ContentWrapper>
        {memo.description}
      </ContentWrapper>
    </Wrapper>
  )
};

Memo.propTypes = {
  memo: PropTypes.object,
  currentMemo: PropTypes.bool
};

Memo.defaultProps = {
  memo: {},
  currentMemo: false
};

export default Memo;