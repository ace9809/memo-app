/**
 * Created by Ace on 2018. 9. 8..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    )
  }
}

export default App;