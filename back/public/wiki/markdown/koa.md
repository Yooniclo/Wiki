koa
========   
첫 문서 등록일시 : 2020-11-17 15:48   

Express 개발진이 새로 만든 node 프레임워크이다.   
async await 구문 안의 에러를 try catch 없이 잡아낼 수 있다.   
express보다 가볍다.


bodyparser로 넘어온 body가 데이터가 있는데 undefined가 뜨면 app.use(router)가 먼저 실행되서 씹히는거임.   
app.use(bodyparser())를 router 보다 위로 올리면 됨 
```
Property 'body' does not exist on type 'Request'.
```
bodyparser 쓸때 이에러가 뜨면 이걸 추가해줘라.
```
yarn add @types/koa-bodyparser
```


```
yarn add typescript ts-node nodemon @types/koa @types/node
```
koa와 typescript 연동을 위한 명령어. nodemon은 save한거 바로바로 반영하려고ㅇㅇ

```
const Sendfile = require('koa-sendfile')

router.get('/', async (ctx: Context) => {
    await Sendfile(ctx, Path.join(__dirname, '../public/index.html'))
})
```
build파일 실행하려면 위와같이 루트 경로에 index.html 지정해줘야 제대로 작동한다.
***
   마지막 문서 수정일시 : 2020-11-17 15:48
***
   마지막 문서 수정일시 : 2020-11-22 20:19
***
   마지막 문서 수정일시 : 2020-11-26 23:53
***
   마지막 문서 수정일시 : 2020-11-26 23:58