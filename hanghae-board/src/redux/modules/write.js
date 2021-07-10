import { firestore } from "../../firebase";


const board_db = firestore.collection("post");

//Actions
const LOAD = "board/LOAD";
const CREATE = "board/CREATE";

const initialState = {
  list: [
    {
      title: "모던 자바스크립트",
      author: "대단한 분..",
      contents: "꼭 사야겠다!",
    },
    {
      title: "알고리즘 인터뷰",
      author: "대단한 분..",
      contents: "너무 어렵지만 열심히 해야겠다!",
    },
  ],
};
// Action Creators
export const loadPost = (board) => {
    return {type: LOAD, board};
}

export const createPost = (board) => {
    return {type: CREATE, board};
}

export const loadPostFB = () => {
    return function(dispatch) {

        board_db.get().then((docs) =>{
            let board_data =[];

            docs.forEach((doc)=> {
                if(doc.exists){
                    board_data = [...board_data, {id: doc.id, ...doc.data()}]
                }
            })

            console.log(board_data);
            dispatch(loadPost(board_data));
        })
    }
}

export const createPostFB = (board) => {
    return function (dispatch) {
        let new_board;
        board_db.add(board).then((doc)=> {
            new_board = {...board, id: doc.id};
        })
        .then((res) => dispatch(createPost(new_board)));
    }
}
// Reducer
export default function reducer(state = initialState, action= {}) {
    switch (action.type){
        case "board/LOAD": {
            if(action.board.length > 0){
                return {list: action.board};
            }

            return state;
        }

        case "board/CREATE": {
            console.log(state, action);
            const new_post_list = [
                ...state.list, action.board,
            ]
            return {list: new_post_list}
        }
        default:
            return state;
    }
}