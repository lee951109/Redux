import {ADD_TODO} from "./actions";
/* state 는 배열
  ['코딩', '점심 먹기'];
*/

const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기값을 설정하는 부분.
  // if (previousState === undefined) {
  //   return [];
  // } 
  // 위의 if문이 인수값인 previousState = initialState 와 같은것. 

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }



  return previousState; // 불변
}
