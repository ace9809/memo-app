import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SimpleMDE from 'react-simplemde-editor';
import { getMemo, modifyMemo, deleteMemo } from 'actions';

const Wrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 10px 25px 0 25px;
  display: flex;
  justify-content: flex-end;
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

const Button = styled.button`
  border-radius: 6px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  background-color: #d9534f;
  outline: 0;
  border: 0;
  color: white;
`;

class MemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value,
    })
    this.debounceUpdateMemo(event)
  }


  handleDescriptionChange = value => {
    this.setState({
      description: value,
    })

    this.debounceUpdateMemo(event)
  }

  deleteMemo = () => {
    this.props.deleteMemo(this.props.id)
  }

  updateMemo = () => {
    this.props.modifyMemo(this.props.id, { 'title': this.state.title, 'description': this.state.description })
  };

  debounceUpdateMemo = _.debounce(function() {
    this.updateMemo();
  }, 1000);

  componentDidMount() {
    this.props.getMemo(this.props.id);
    if (Object.keys(this.props.memo).length !== 0) {
      this.setState({
        title: this.props.memo.title,
        description: this.props.memo.description
      })
    }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        title: nextProps.memo.title,
        description: nextProps.memo.description
      })
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
       <ButtonWrapper>
         <Button onClick={this.deleteMemo}>삭제하기</Button>
       </ButtonWrapper>
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

MemoForm.propTypes = {
  memo: PropTypes.object,
  id: PropTypes.number
};

MemoForm.defaultProps = {
  memo: {}
};

export default connect(mapStateToProps, { getMemo, modifyMemo, deleteMemo })(MemoForm);