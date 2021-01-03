jquery
========   
첫 문서 등록일시 : 2020-03-21 10:42   

[1. 함수][id]
[id]:#1

###1. 함수   

```
var arr= [ 
{title : '다음', url : 'http://daum.net'}, 
{title : '네이버', url : 'http://naver.com'} 
];


$.each(arr, function (index, item) { 
// 두 번째 매개변수로는 콜백함수인데 콜백함수의 매개변수 중 
// 첫 번째 index는 배열의 인덱스 또는 객체의 키를 의미하고 
//두번째매개 변수 item은 해당 인덱스나 키가 가진 값을 의미합니다
var result = ''; result += index +' : ' + item.title + ', ' + item.url; console.log(result); 
// 0 : 다음, http://daum.net 
// 1 : 네이버, http://naver.com
 })
```
each함수 와 예제
```
Unbind()
```
이전에 연결된 이벤트 핸들러를 요소에서 제거합니다.

***
   마지막 문서 수정일시 : 2020-03-21 10:42