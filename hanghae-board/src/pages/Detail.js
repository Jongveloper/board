import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { loadPost, loadPostFB } from "../redux/modules/write";
import { useHistory } from "react-router-dom";
import { firestore } from "firebase";

function Detail(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const post_list = useSelector((state) => state.write.list);

  let post_index = parseInt(props.match.params.index);

  console.log(post_list[post_index].title);

  useEffect(() => {
    dispatch(loadPostFB());
  }, [dispatch]);
  return (
    <Wrap>
      <Container>
        <h1>{post_list[post_index].title}</h1>
        <p>{post_list[post_index].author}</p>
        <div>
          <span>{post_list[post_index].contents}</span>
        </div>
        <Button
          style={{}}
          variant="contained"
          color="primary"
          onClick={() => {
            history.goBack();
          }}
        >
          돌아가기
        </Button>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 30px;
`;
const Container = styled.div`
  width: 400px;
  height: 400px;
  padding: 10px;
  & > h1 {
    margin-top: 200px;
  }
  & > div {
    width: 400px;
    height: 100px;
    border-radius: 20px;
    background-color: gray;
    padding: 30px;
    margin-bottom: 10px;
    & > span {
      color: white;
    }
  }
`;

export default Detail;
