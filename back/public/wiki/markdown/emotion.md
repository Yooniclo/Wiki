emotion
========   
첫 문서 등록일시 : 2020-11-05 12:04   

[1. 개발환경 설정][id]
[id]:#1
###1. 개발환경 설정

eject로 package.json에서 babel preset을 설정 할 수 있게 한다
```
yarn eject
```
babel-preset-css-prop를 설치한다.
```
yarn add @emotion/babel-preset-css-prop
```   
CRA에선 package.json에  다음을 추가해야 동작한다.

```
  "babel": {
    "presets": [
      "react-app",
      ["@emotion/babel-preset-css-prop"]
    ]
  }
```

***
   마지막 문서 수정일시 : 2020-11-09 14:05
***
   마지막 문서 수정일시 : 2020-11-29 11:55