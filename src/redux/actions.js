// Action의 type 은 대문자로 만든다.
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// 액션 생성함수 {type: ADD_TODO, text: '할일'}
export function addTodo(text) { 
  return {
    type: ADD_TODO,
    text: text, // key 와 value가 같으면 value값만 적어도 된다.
  };
}


// {type : COMPLETE_TODO, index: num}
export function completeTodo(index) {
  return {
    type : COMPLETE_TODO,
    index
  }
}


export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll() {
  return { type : SHOW_ALL};
}

export function showComplete() {
  return { type : SHOW_COMPLETE};
}