import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TableList from "./TableList";
import {withRouter} from "react-router-dom"

function Header({history}) {
  return (
    <Wrap>
      <HeaderBox>
        <h1>게시판 만들기</h1>
        <p>아주 간단한 게시판입니다.</p>
        <Button variant="contained" color="primary"
        onClick={() => {
            history.push('/write')
        }}>
          글쓰기
        </Button>
      </HeaderBox>
      <TableList/>
    </Wrap>
  );
}


const Wrap = styled.div`
  max-width: 800px;
  margin: auto;
`;

const HeaderBox = styled.div`
  width: 800px;
  height: 300px;
  background-color: #343a40;
  color: white;
  padding: 20px;
  & > h1{
      font-size: 60px;
      margin-top: 60px;
  }
  & > p{
      font-size: 25px;
  }

  & > Button{
      width: 100px;
      height: 50px;
      font-size: 25px;
  }
`;

export default Header;
