javascript
========   
첫 문서 등록일시 : 2020-03-19 13:51   

[1. 함수][id]
[id]:#1
[2. 문법][id2]
[id2]:#2
[3. 스킬][id3]
[id3]:#3
[4. 용어][id4]
[id4]:#4
[5. 엔진][id5]
[id5]:#5
###1. 함수   

**함수선언방법**
```
function 함수명() { 내용 }
```
함수선언식   
```
var 함수명 = function () { 내용 }
```
함수표현식
```
const 함수명 = () => { 내용 }
```
arrow function   

```
function* 함수명() {
    console.log('first call')
    yield 10
    console.log('second call')
    yield 20
    console.log('third call')
    yield 30
}

let gen = call()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

```
제너레이터 함수. next() - generator를 실행한다. yield구문까지 실행하고 종료한다. 또한 재호출시 마지막 yield지점에서 시작한다.

***


```
[array].includes(변수)
```
배열안에 해당 값이 포함되어있는지 확인, 반환은 true false
```
e.target.className += ' ' + 'star'
 element.classList.add("mystyle");
 element.classList.remove("mystyle");
```
클래스 명 추가, 삭제
```
document.getElementById('sms_contents').addEventListener('paste', function(e){
                var clipboardData, pastedData;
            
                clipboardData = e.clipboardData || window.clipboardData;
                pastedData = clipboardData.getData('Text');

                let bytes = 0
                for(let i = 0; i<pastedData.length; i++){
                    (pastedData.charCodeAt(i) > 127)? bytes+=2:bytes++
                }
                const sendtype = document.getElementById('sendType')
                
                this.innerHTML = pastedData
                bytes>80?sendtype.innerHTML = 'MMS' : sendtype.innerHTML = 'SMS'
                document.getElementById('bytes').innerHTML = bytes
                //alert(pastedData);
            })
```
클립보드 붙여넣기 이벤트 발생시 쓰는 함수
```
window.getComputedStyle(DOM, null).getPropertyValue(property)
```
해당 태그의 스타일 속성을 가져올때 사용
```
console.dir()
```
안에 객체값을 보고 싶은데 console.log로는 태그만 보일 경우 사용
```
[변수명].padStart(시작 길이, 추가할 문자열)
```
시작 길이만큼을 좌측부터 문자열을 추가해서 새로 반환한다   
ex ) var a = '0001' 일때 var b = a.padStart(5, '0')을 하면 '00001'이 된다. 이미있는 값엔 0을 채우지 않음
```
'abc'.repeat(2);    // 'abcabc'
```
문자열을 반복해서 출력
```
[DOM].parentElement / [DOM].parentNode
```
해당 DOM의 부모요소를 가르킴
```
nextElementSibling
```
해당 DOM의다음 엘리먼트를  가르킴
```
[type].sort((a, b) => a - b)

[type].sort(function (a, b) {
    return a -  b
})
```
첫번째 코드는 내림차순 정렬 함수이다.   
아래와 같이 커스텀도 가능하다

```
[할당변수명] = [변수명].replace([변경될 문자], [변경할 문자])
.replace(/1|0/g, a => + a ? '#' : ' '))
```
문자열의 특정문자를 치환해준다   
정규표현식을 넣어서 조건을 줄 수 있다

```
[type].join()
```
문자열로 변환시켜주는듯?

```
[array].slice( 시작, 끝 ) / [array].splice( 시작, 끝 )
```
시작 길이와 끝 길이 만큼 배열을 잘라준다.   
slice는 기존 배열을 유지한채 자르고   
splice는 기존 배열에서 자른 값을 삭제한다.    
a = b.splice 와 같은 형태로 할당이 가능하다
```
[할당변수] = [배열변수].split("구분값")
```
구분값을 기준으로 잘라서 할당변수에 새 배열을 저장한다
```
[array].reverse()
```
해당 변수를 리버스해준다
```
[변수타입] [변수명] = [배열변수].map((v, i) => { })

var progress = [90, 30, 55]
var speed = [1, 30, 5]
var workday = []

workday = progress.map((progress, index) => Math.ceil((100 - progress) / speed[index]))
```
기존 배열값을 이용해 연산작업을 수행후 새 변수에 할당해주는 함수.   
특징은 반드시 같은 배열 길이로 반환된다. 
두번째 인자인 index를 이용해 참조 배열이 2개여도 사용이 가능하다   
Map에서 Arrow Function을 사용할땐 return을 해주지 않으면 콘솔에 경고문이 뜬다.   
이럴땐 forEach함수를 똑같이 사용하면 된다.

```
[변수타입] [변수명] = [배열변수].filter((v, i) => ())

map은 괄호를 {} 이거 썼는데 filter는 ()써야 되더라..
```
배열중 조건에 맞게 걸러서 반환해준다. 배열 길이가 다른 값을 반환해야되는경우에 사용
```
setTimeout(function() { 내용 }, 시간초)
```
일정 시간 후 한번 실행
```
setInterval(function() { 내용 }, 시간초)
```
일정 시간 후 반복 실행   

**참조 하면 좋은 사이트 또는 문서**
[https://ko.javascript.info/][link]   
[link]: https://ko.javascript.info/   

**key event 입력 막기**
```
const newDoc = document.getElementById('newDoc')
newDoc.addEventListener('keydown', function (e) {
  if (e.keyCode === 9) {
    e.preventDefault()
  }
})
```

**키보드 커서 확인 및 커서 부분 값 변경**   
```
[DOM].selectionStart, [DOM].selectionEnd
```
javascript 키보드 커서 확인
```
[DOM].setRangeText(변경할 값, 시작 위치, 끝 위치, 옵션(end, select 등))
```
커서 부분 값 변경   

[https://javascript.info/selection-range][link]   
[link]: https://javascript.info/selection-range  

**callback 함수란**

javascript에서는 callback 함수는 다른 함수의 매개변수로 함수를 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미합니다. callback은 쉽게 말하자면 어떤 일을 다른 객체에게 시키고, 그 일이 끝나는 것은 기다리지 않고 끝나고 부를 때까지 다른 일을 하는 것을 말합니다. 그렇기 때문에 non-block이며, 비동기 방식의 함수를 사용합니다.
```
function first(a,b,callback){
	let v=a*b;
	callback(v);
}

first(1,2,function(v){
	console.log(v);		//2
})
```

**promise**

promise 는 약속입니다. 어떤 작업이 성공했을 때(resolve), promise 객체의 then() 함수에 넘겨진 파라미터(함수)를 단 한번만 호출하겠다는 약속입니다. callback 의 경우 제어권이 호출되는 함수로 넘어가 버리기 때문에 신뢰성이 다소 떨어지지만 promise 는 함수 실행이 성공했을때 then() 함수의 파라미터(함수)가 단 한번만 호출되기 때문에 함수를 호출하는 입장에서 확신을 가지고 코드를 작성할 수 있습니다. 또한 실패했을 경우(reject)에도 catch()함수를 통해서 실패 이후의 작업을 처리할 수 있습니다.   
```
function goWork(time1, timeStartWork) {
  return wakeUp(time1)
    .then(time2 => tackSubway(time2))
    .then(time3 => takeOffSubway(time3))
    .then(time4 => arriveWork(time4))
    .then(arrivalTime => {
      if (arrivalTime > timeStartWork) {
        fire()
      }
    })
}
```


**Async / await**   
비동기 코드를 작성할 때 비교적 쉽고 명확하게 코드를 작성할 수 있다.
자바스크립트는 싱글 스레드기 때문에 비동기처리가 필수이다.
비동기 처리는 그 결과가 언제 반환될지 알 수 없기 때문에 동기식으로 처리하는 기법도 사용된다.
Ex) setTimeout, callback, promise 세 가지 모두 비동기 코드를 동기식으로 작성하는데 훌륭한 기법이지만 약간의 문제점이 있는데, async와 await은 이런 문제를 해결함과 동시에 사용법도 간단.

async 와 await 는 절차적 언어에서 작성하는 코드와 같이 사용법도 간단하고 이해하기도 쉽습니다. function 키워드 앞에 async만 붙여주면 되고 비동기로 처리되는 부분 앞에 await만 붙여주면 됩니다. 다만, 몇 가지 주의할 점이 있다면 await 뒷부분이 반드시 promise 를 반환해야 한다는 것과 async function 자체도 promise 를 반환한다는 것입니다.

```
async function goWork(time1, timeStartWork) {
  const time2 = await wakeUp(time1)
  const time3 = await takeSubway(time2)
  const time4 = await takeOffSubway(time3)
  const arrivalTime = await arriveWork(time4)
  if (arrivalTime > timeStartWork) {
    fire()
  }
}
```

```
async function GetJson() {
  const datareq = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const databb = await datareq.json()
}

//php에서 값 가져올땐 이런식으로
async function GetPHP() {
  const datareq = await fetch('return.php').then(function (res){
    return res.text()
  }).then(function (body) {
    return body
  })
  console.log(datareq)
}
```

###2. 문법   

```
var [변수명] = (조건문) ? [참 값] : [아닌 값]
ex ) var pwchangeflag = (this.store_password !== '') ? 1 : 0;
```
삼항연산자, 조건문 코드수를 확실히 줄인다.   
조건이 없는 경우 그냥 false 또는 '' 를 주면 된다. 



###3. 스킬   

```
replace(/'/g, "\\'")
```
문자열에 작은 따옴표 포함될 경우 escape해주는 정규표현식

```
function makekey() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
```
무작위 키값을 만들어 내는 함수   
```
this.advertiser = adv_owner_array.filter((v, i) => adv_owner_array.indexOf(v) === i)
```
배열 중복제거 함수

```
for (var key in req.params) {
    console.log(req.params[key])
}
```
오브젝트 키값 뽑기
###4. 용어   

비동기 : ‘특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성’   
프로미스 : 자바스크립트 비동기 처리에 사용되는 객체   
async & await : 
```
자바스크립트 비동기 처리 패턴중 가장 최근에 나온 문법. 
기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 해준다
```
fetch : 비동기 네트워크 통신 방식. 데이터를 받아오려면 무조건 서버에서 json 형태로 보내야되고 받을때도 .json()으로 받아야한다.

###5. 엔진   

```
자바스크립트 엔진은 Memoy Heap과 Call Stack으로 구성되어 있다.   
가장 많이 쓰는 엔진은 V8엔진이다.   
자바스크립트는 싱글 스레드 프로그래밍 언어이다.   
DOM, AJAX, SetTimeOut은 Web API로서 엔진 밖에 있다.   
Call Stack에서 실행된 비동기 함수는 Web API를 호출하고,   
Web API는 콜백함수를 Callback Queue에 밀어 넣는다.
```
Callback Queue    
```
비동기적으로 실행된 콜백함수가 보관 되는 영역이다.
예를 들어 setTimeout에서 타이머 완료 후 실행되는 함수(1st 인자),
addEventListener에서 click 이벤트가 발생했을 때 실행되는 함수(2nd 인자) 등이 보관된다.
```
Event Loop   
```
Event Loop는 Call Stack과 Callback Queue의 상태를 체크하여,
Call Stack이 빈 상태가 되면, Callback Queue의 첫번째 콜백을 Call Stack으로 밀어넣는다.
이러한 반복적인 행동을 틱(tick) 이라 부른다.
```
자바스크립트를 단일 스레드 프로그래밍 언어라 한번에 하나씩 밖에 실행할 수 없다.   
그러나 Web API, Callback Queue, Event Loop 덕분에 멀티 스레드 처럼 보여진다.   

```
Event Loop는 우선적으로 Microtask Queue를 확인한다.   
만약 Microtask Queue에 콜백이 있다면, 이를 먼저 Call Stack에 담는다.   
그리고 Microtask Queue에 더이상 처리해야할 콜백이 없다면,   
Task Queue에 확인 후 처리한다.   

Promise의 then()의 콜백 은 Task Queue가 아닌 Microtask Queue에 담긴다.   
Microtask Queue > Animation Frames > Task Queue 순으로 실행된다.(크롬기준)
```
***
undefined 값을 가진 변수에는 새로운 값을 할당 할 수 없다
***
   마지막 문서 수정일시 : 2020-11-18 16:37
***
   마지막 문서 수정일시 : 2020-11-19 10:55
***
   마지막 문서 수정일시 : 2020-11-19 10:56
***
   마지막 문서 수정일시 : 2020-11-30 11:07
***
   마지막 문서 수정일시 : 2020-12-03 11:55