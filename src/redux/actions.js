// Action의 type 은 대문자로 만든다.
export const ADD_TODO = 'ADD_TODO';


// 액션 생성함수
export function addTodo(todo) { 
  return {
    type: ADD_TODO,
    todo: todo, // key 와 value가 같으면 value값만 적어도 된다.
  };
}
