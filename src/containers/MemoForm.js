import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMemo } from '../actions';

class MemoForm extends Component {
  componentWillMount() {
    this.props.getMemo(this.props.id);
  }
  render() {
    if (!this.props.memo) {
      return <div>로딩 중...</div>
    }
    const {
      title,
      description
    } = this.props.memo;
    return (
     <div>
       {description}
     </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    memo: state.memo.memo
  }
}

export default connect(mapStateToProps, { getMemo })(MemoForm);