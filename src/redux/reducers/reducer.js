import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todos";


// combineReducers 에서는 대표 reducer를 만들어서 세분화를 할 수 있다.
const reducer = combineReducers({
  todos: todos, // or todos
  filter // or filter : filter
});


export default reducer;
