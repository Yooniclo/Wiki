typescript
========   
첫 문서 등록일시 : 2020-11-06 17:16   

[1. 문법][id]
[2. Skills][id]
[id]: #1typescript
[id2]: #2typescript
###1. 문법
```
const MoveHorse = (e: React.MouseEvent<HTMLInputElement>) => {}
```
이벤트일 경우 이렇게 명시해줘야하고
```
e.currentTarget
```
e.target.value는 이렇게 바꿔줘야 한다.

```
  const CurrentOneDimension = e.currentTarget.parentNode?.parentElement
  let OneDimension_id = CurrentOneDimension?.getAttribute('id')
  OrientalChessBoard[Number(OneDimension_id)][Number(e.currentTarget.id)] = ''
```
형변환의 경우 앞에 Number()을 감싸주거나 하면 된다.

```
Property 'id' does not exist on type '{}'.
```
이런 오류가 발생할 경우엔 제네릭 타입을 설정해줘야 한다.
```
interface MatchParams {
  id: string;
}
const BlindBoardRead = ({match}: RouteComponentProps) => { 
  console.log(match.params.id)
```
###2. Skills

***
   마지막 문서 수정일시 : 2020-11-06 17:18
***
   마지막 문서 수정일시 : 2020-11-06 17:52
***
   마지막 문서 수정일시 : 2020-11-25 17:30