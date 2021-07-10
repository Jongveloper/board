import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { loadPost, loadPostFB } from "../redux/modules/write";
import { useDispatch, useSelector } from "react-redux";


function TableList({ history }) {
  const dispatch = useDispatch();
  const write_list = useSelector((state) => state.write.list);

  useEffect(() => {
    dispatch(loadPostFB());
  }, [dispatch]);
  return (
    <Table>
      <thead>
        <Tr>
          <td style={{ fontWeight: "bold" }}>글번호</td>
          <td>글쓴이</td>
          <td>글제목</td>
        </Tr>
        {write_list.map((list, index) => {
          return (
            <Tr
              key={index}
              onClick={() => {
                history.push("/detail/" + index);
              }}
            >
              <td style={{ fontWeight: "bold" }}>{index+1}</td>
              <td>{list.author}</td>
              <td>{list.title}</td>
            </Tr>
          );
        })}

        <Tr>
          <td style={{ fontWeight: "bold" }}>asdfasdf</td>
          <td>asdfasdf</td>
          <td>asdfadsfasdfadsfadsfads</td>
        </Tr>
      </thead>
    </Table>
  );
}

const Table = styled.table`
  width: 840px;
  border-left: none;
  border-right: none;
  font-size: 20px;
  margin-top: 40px;
`;

const Tr = styled.tr`
  & > td {
    border-top: 2px solid #f1f3f5;
    width: 100px;
    padding: 10px;
    cursor: pointer;
  }
  :hover {
    background-color: #f1f3f5;
  }
`;
export default withRouter(TableList);
