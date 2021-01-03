vue
=====
[1. vue 개발환경 구성][id]
[id]:#1vue

###1. vue 개발환경 구성   
```
npm install vue 
npm I -g @vue/cli = vue-cli
vue create <project-name> 
npm run serve
```
vue-cli : vuex, eslint, scss, unit test 등 자동 설치 지원


Vue Router History 모드 Refresh 오류   
[https://router.vuejs.org/kr/guide/essentials/history-mode.html][url] 참조   
[url]: https://router.vuejs.org/kr/guide/essentials/history-mode.html   

Vue.config 에서 전역 변수, 함수 설정 할 수 있다는데 실험 안해봄

Vue npm run build시 'env' 경로가 맞지 않을 경우   
.babelrc파일 경로가 다르기 때문에 발생. mv .babelrc/[디렉토리]로 옮겨줄 것


```
this.$nextTick(function() {
    ...
})
```
DOM이 그려지기 전에 DOM을 조작하려고 하면 에러가 생기기 때문에,   
해당 함수로 감싼후에 코드를 작성하면 DOM을 그린다음 조작하게 한다.


```
data() {
    test: 'Foo'
}
watch: {
    test: function(val) {
        ...    
    }
}
```
watch속성은 데이터 하나를 지정해서 그 값이 변할때 어떤 명령을 실행 할 수 있다.   
v-model이 있는 경우엔 watch만 써서 감지 가능하지만   
v-model이 없는 값일 경우 computed랑 같이 써야 작동한다.


```
<div>{{ value }}</div>

computed: {
    value() {
        return [내보낼 값]
    }
}
```
실시간 데이터 변경이 필요한 경우 computed 속성에서 값을 정의해주면 된다.
```
<div>{{ realvalue }}</div>

data() {
    return {
        value : []
    }
}
computed: {
    realvalue() {
        this.value.foo = 1234
        return this.value
    }
}
```
배열안의 값을 변경해야 하는 경우엔 다음과 같이도 가능

로컬에서 PHP 파일을 실행시키는 법 (npm run build 없이) : url을 절대경로로(http://localhost/foo/bar.php)   
설정한 후 apache httpd.conf에서 CORS 설정 해주기

```
v-bind:style= "[condition ? {styleA} : {styleB}]"
```
조건부로 스타일 설정을 할 수 있다
***
   마지막 문서 수정일시 : 2020-09-04 15:57
***
   마지막 문서 수정일시 : 2020-12-17 10:51