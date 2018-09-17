/**
 * Created by Ace on 2018. 9. 10..
 */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 120px;
  border-bottom: 1px solid #F3F1F1;
  padding: 20px;
  cursor: pointer;
  
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

const Memo = (memo) => {
  const {
    title,
    description,
    created
  } = memo.props;
  return(
    <Wrapper>
      <TitleWrapper>
        {title}
      </TitleWrapper>
      <CreatedWrapper>
        {created}
      </CreatedWrapper>
      <ContentWrapper>
        {description}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Memo;