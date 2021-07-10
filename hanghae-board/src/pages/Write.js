import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { createPost, createPostFB } from "../redux/modules/write";
function Write({history}) {
  const dispatch = useDispatch();
  const input_title = React.useRef();
  const input_author = React.useRef();
  const input_contents = React.useRef();
  return (
    <Wrap>
      <InputWrap>
        <Input
          type="text"
          placeholder="제목을 입력하세요"
          ref={input_title}
        ></Input>
        <Input
          type="text"
          placeholder="글쓴이를 입력하세요"
          ref={input_author}
        ></Input>
        <Input
          type="text"
          placeholder="내용을 입력하세요"
          style={{ height: "150px" }}
          ref={input_contents}
        ></Input>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            let input_text = {
              title: input_title.current.value,
              author: input_author.current.value,
              contents: input_contents.current.value
            };
            dispatch(createPostFB(input_text));
            history.push("/");
            console.log(createPostFB(input_text));
          }}
        >
          글쓰기
        </Button>
      </InputWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 800px;
  margin: auto;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 250px;
  & > Button {
    width: 80px;
    margin: 5px;
    height: 40px;
  }
`;

const Input = styled.input`
  width: 800px;
  height: 30px;
  margin: 5px;
  padding: 8px;
`;

export default Write;
