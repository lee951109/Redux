# **Redux**

## Redux?

간단하게 말 하자면 리액트의 복잡한 컴포넌트 구조속에서 보다 간편하게 모든 컴포넌트들이 state 를 쉽게 공유할 수 있게 해주는 방식이다.

> ‼️ Redux 는 리액트 내부의 기술이 아니라 순수 HTML, JS 내에세도 사용이 가능하다.!!

### 특징

1. **단일** 스토어다!

## Action - 액션

> 액션은 어플리케이션으로부터 온 데이터를 스토어에 전송하는 정보의 페이로드(payload)다.

### 특징
+ Action은 Object(객체)다.
+ 두 가지 형태의 액션이 있다.
  + {type: 'TEST'} //payload 없는 액션
  + {type: 'TEST', params: 'hello'} //payload 있는 액션
+ type 만이 필수 프로퍼티이며, type은 문자열이다.

### Action 생성자?
``` javascript
  function 액션생성자(...args) {return 액션;}
```
+ 액션을 생성하는 함수를 "액션 생성자(Action Creator)"라고 한다.
+ 함수를 통해 액션을 생성해서, 액션 객체를 리턴해준다.
+ createTest('hello'); // {type:'TEST', params: 'hello'} 리턴

### Action 하는 일
+ 액션 생성자를 통해 액션을 만든다.
+ 만들어낸 액션 객체를 리덕스 스토어에 보낸다.
+ 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경된다.
+ 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경된다.
+ 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있다.

## Reducers - 리듀서
> 리듀서는 스토어에 전송된 액션에 응답으로 어플리케이션의 상태가 어떻게 바뀌는지를 지정한다.

```javascript
  function reducers(previousState, action) {return newState;}
```
+ 액션을 받아서 state를 리턴하는 구조
+ 인자로 들어오는 previousState 와 리턴되는 newState 는 다른 참조를 가지도록 해야한다.


### 특징
+ 액션을 주면, 그 액션이 적용되어 달라진(그대로인)결과를 만들어 준다.
+ 그냥 함수다.
  + Pure Function // 항상 같은 input을 받으면 항상 같은 결과를 내는 함수를 의미한다.
  + 불변(Immutable)
    + why??
      + 리듀서를 통해 state가 달라졌음을 리덕스가 인지하는 방식.

## Store
> 액션과 리듀서가 함께하는 곳.

+ application state 를 가지고 있다.
+ `getState()`를 통해 접근한다.
+ `dispatch(atcion), dispatch(action creator)`로 업데이트
+ `subscribe(listener)`함수로 리스너들을 등록 가능하다.
+ 위 함수 `subscribe()`에 의해 반환된 함수는 리스너들의 등록 해제를 다룬다.
  + index.js 에서 확인 가능.