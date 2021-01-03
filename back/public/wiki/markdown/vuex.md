Vuex
========   
첫 문서 등록일시 : 2020-06-19 15:15   

Vue로 작성된 애플리케이션의 상태관리를 통합적으로 구성할 수 있게 도와주는 라이브러리이다.
FLUX 패턴에서 영감을 받았다.   

컴포넌트가 액션을 일으키면(예를 들면 버튼 클릭같은...)   
액션에서는 외부 API를 호출한 뒤 그 결과를 이용해 변이를 일으키고(만일 외부 API가 없으면 생략)   
변이에서는 액션의 결과를 받아 상태를 변경한다. 이 과정은 추적이 가능하므로 DevTools와 같은 도구를 이용하면 상태 변경의 내역을 모두 확인할 수 있다.   
변이에 의해 변경된 상태는 다시 컴포넌트에 바인딩되어 UI를 갱신한다.

```
computed: {
count() {
        return store.state.count;
    }
}
```
State : 애플리케이션에서 공통으로 관리할 상태, 즉 모델을 의미한다. 컴포넌트에서 스토어의 상태에 접근해서 가져올 때는 computed 내에 작성한다.   
(main.js에 new Vue 부분에 store를 주입하면 모든 컴포넌트에서 store를 임포트할 필요가 없다)   
```
export default new Vuex.Store({
    state: {
        count: 2
    },
    getters: {
        multiply (state) {
            return state.count * state.count
        }
    }
})
```
Getters : 스토어 파일 내에서 Vue의 computed와 같은 역할을 한다. 스토어의 상태를 가져와 가공할 필요가 있는경우 사용한다.   
Getters의 첫번째 인자는 state를 전달 받고 두번째 인자로는 getter 자체를 전달받을 수 있다.   
```
export default new Vuex.Store({
    state: {
        count: 2
    },
    mutations: {
        INCREMENT (state, payload) {
            state.count = state.count + payload
        }
    }
})
```
Mutation : Vuex에서 스토어의 상태를 변경할 수 있는 유일한 방법이다. 변이는 게터와는 다르게 store.mutation으로 직접 접근이 불가능하다.   
변이를 호출하려면 store.commit 메소드를 사용해야한다. 또한 변이는 반드시 동기적이어야 한다. 메소드가 언제 호출되었는지를 모르기 때문에   
```
export default new Vuex.Store({
    state: {
        count: 2
    },
    mutations: {
        INCREMENT (state, payload) {
            state.count = state.count + payload
        }
    },
    actions: {
        increment (context, payload) {
            context.commit("INCREMENT", payload)
        }
    }
})
```
Actions : 크게 2가지 역할을 담당한다. '변이에 대한  커밋', '비동기적인 작업을 할 때' 이다. 액션은 dispatch라는 메소드를 통해서 사용 할 수 있다.
***
   마지막 문서 수정일시 : 2020-06-22 19:46