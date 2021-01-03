git
========   
첫 문서 등록일시 : 2020-03-18 13:58   

[1. git 명령어][id]
[2. 오류 메세지][id2]   
[id]: #1git
[id2]: #2git
###1. git 명령어   
```
git fetch --all
git reset --hard origin/master
git pull origin master
```
pull 하다가 충돌 날경우 강제로 pull 하기
```
git config core.sparseCheckout true
echo "script/sys-script" >> .git/info/sparse-checkout
```
하위 디렉토리만 clone 이나 pull 하고 싶을 경우 세팅

```
 git log -p -2
```
수정된 부분이 어딘지 보여줌 -2는 최근 2개만 조회함
```
git clean -f
```
untracked 파일들 삭제해줌(추가는 됬는데 커밋하고 싶지않은 파일이 있을경우)
```
git reset
```
git add 잘못했을때 리셋 시켜줌
```
git status
```
변경된 파일이 있는지 검사, 이 명령어 입력후에 git add. 후 push하면 변경된 파일만 커밋된다
```
git remote -v 
```
현재 지정된 원격 저장소 주소 확인
```
git init 
```
git 초기화 명령어
```
git add .
```
 현재 폴더의 모든 파일들을 list에 add한다
```
git commit -m '커밋 내용'
```
파일들을 push하기전에 꼭 작성하는 commit
```
git remote add origin [repository url]
```
git repogitory를 원격 지정한다
```
git remote remove origin 
```
기존 origin 삭제하기
```
git push -u origin [branch]
```
파일들을 repogitory에 푸쉬한다(--force시 강제로) // branch는 master면 master
```
touch [파일명]
```
git bash 파일 생성 명령어
```
git pull origin [branch]
```
repogitory branch의 변경된 파일들만 로컬로 다운로드 하는 명령어
```
git clone [repository url] 
```
저장소의 모든 파일들을 다운로드 하는 명령어
```
git branch 
```
원격 브랜치 목록 보기(-r 을쓰면 모든브랜치 포함)
```
git fetch 
```
원격 브랜치의 파일 가져오기
```
git checkout [branch]
```
브랜치 변경하기
```
git checkout -b [branch]
```
git fetch없이 브랜치 변경하기 

###2. git 오류메세지   
```
error: src refspec master does not match any
```
 commit 안하고 push시 나오는 에러메세지
```
! [rejected] master -> master (fetch first) error: failed to push some refs to [url]
```
저장소에 이미 한 번 push가 돼서 파일이 존재할 경우 출력되는 메시지. --force로 push를 강제하면 된다.

***
   마지막 문서 수정일시 : 2020-03-23 16:46
***
   마지막 문서 수정일시 : 2020-11-06 15:21
***
   마지막 문서 수정일시 : 2020-11-06 15:23
***
   마지막 문서 수정일시 : 2020-11-06 18:15
***
   마지막 문서 수정일시 : 2020-11-06 18:31
***
   마지막 문서 수정일시 : 2020-11-25 22:35
***
   마지막 문서 수정일시 : 2020-12-21 17:45
***
   마지막 문서 수정일시 : 2020-12-24 15:11