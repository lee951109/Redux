// Action 변수는 대문자로 만든다.
const ADD_TODO = 'ADD_TODO';


// 액션 생성함수
function addTodo(todo) { 
  return {
    type: ADD_TODO,
    todo: todo, // 혹은 todo 만 적어도 된다.
  };
}