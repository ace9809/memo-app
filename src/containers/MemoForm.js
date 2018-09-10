import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SimpleMDE from 'react-simplemde-editor';
import { getMemo, modifyMemo } from '../actions';

const Wrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const EditorWrapper = styled.div`
  padding: 40px 25px;
`;

const TitleInput = styled.input`
  margin: 40px 25px;
  width: 100%;
  display: block;
  border: none;
  padding: 10px 0;
  border-bottom: solid 1px #1abc9c;
  background-repeat: no-repeat;
  color: #0e6252;
  &:focus, &:valid {
  box-shadow: none;
  outline: none;
  background-position: 0 0;
  }
`;

class MemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: this.props.description
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
    this.props.modifyMemo(this.props.id);
  }

  handleDescriptionChange = value => {
    this.setState({ description: value });
  }

  componentWillMount() {
    this.props.getMemo(this.props.id);
    if (this.props.memo) {
      this.setState({
        title: this.props.memo.title
      })
    }
  }
  render() {
    if (!this.props.memo) {
      return <div>로딩 중...</div>
    }

    const editorOptions = {
      autofocus: false,
      spellChecker: false,
      placeholder: "입력해주세요...",
      initialValue: this.props.memo.description,
    }
    return (
     <Wrapper>
       <TitleWrapper>
         <TitleInput
           type="text"
           value={this.state.title}
           onChange={this.handleTitleChange}
         />
       </TitleWrapper>
       <EditorWrapper>
         <SimpleMDE
           options={editorOptions}
           value={this.state.description}
           onChange={this.handleDescriptionChange}
         />
       </EditorWrapper>
     </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    memo: state.memo.memo
  }
}

export default connect(mapStateToProps, { getMemo, modifyMemo })(MemoForm);