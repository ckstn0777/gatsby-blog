---
title: 'Redux middleware : redux-thunk'
date: '2021-02-17'
category: 'React'
tags:
  - 'react'
  - 'redux'
  - 'redux-thunk'
featuredImage: './images/redux-devtools.png'
---

## what is redux-thunk?

### Information

redux-thunk는 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어이다. 이 미들웨어를 사용하면 액션 객체가 아닌 **함수를 디스패치 할 수 있다**. redux-thunk는 리덕스의 창시자인 Dan Abramov가 만들었으며, 리덕스 공식 매뉴얼에서도 비동기 작업을 처리하기 위하여 미들웨어를 사용하는 예시를 보여주고 있다.

<!-- end -->

```javascript
const thunk = (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
```

실제로, redux-thunk의 코드는 위와 유사하다. 그냥 추가 기능을 위하여 몇 줄이 조금 더 추가됐을 뿐이다. 코드를 열어보시면 겨우 14줄밖에 안된다.

### Example

함수를 디스패치 할 때에는, 해당 함수에서 `dispatch` 와 `getState`를 파라미터로 받아와주어야 한다. 이 함수를 만들어주는 함수를 우리는 thunk 라고 부른다. 아래 thunk의 사용 예시를 확인해보자.

```javascript
const getComments = () => (dispatch, getState) => {
  // 이 안에서는 액션을 dispatch 할 수도 있고
  // getState를 사용하여 현재 상태도 조회 할 수 있습니다.
  const id = getState().post.activeId

  // 요청이 시작했음을 알리는 액션
  dispatch({ type: 'GET_COMMENTS' })

  // 댓글을 조회하는 프로미스를 반환하는 getComments 가 있다고 가정해봅시다.
  api
    .getComments(id) // 요청을 하고
    .then((comments) =>
      dispatch({ type: 'GET_COMMENTS_SUCCESS', id, comments })
    ) // 성공시
    .catch((e) => dispatch({ type: 'GET_COMMENTS_ERROR', error: e })) // 실패시
}

// 컴포넌트에서
dispatch(getComments())
```

- `disptach(getComments());`를 통해 thunk 미들웨어가 먼저 실행이 된다.
- 이 thunk 미들웨어는 함수를 디스패치 할 수 있다고 했다. `typeof action === 'function'`이라면 `action(store.dispatch, store.getState);` 이런식으로 store에 있는 디스패치와 상태를 파라미터로 넣어줄 수 있다.
- 이후에는 getComments 안에 코드가 실행되면서 그 안에서 또 다른 dispatch를 요청할 수 있고, 비동기 작업도 할 수 있게 되는 것이다.

![](/images/redux-devtools.png)
