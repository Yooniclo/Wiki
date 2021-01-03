linux
========   
첫 문서 등록일시 : 2020-03-18 16:48   

[1. linux 명령어][id]
[id]: #1linux
[2. linux 파일 자동 백업][id2]
[id2]: #2linux
[3. vi 명령어][id3]
[id3]: #3vi

###1. linux 명령어

```
드래그된 텍스트 범위 안에서 우클릭 = 복사
```
ctrl + c로 복사하면 실행 프로그램이 종료되는 경우가 있음. 그럴때 우클릭으로 복사 가능

```
cp [파일명] [디렉토리 명]
cp -r [복사할 디렉토리명][복사시킬 디렉토리명]
```
파일 명을 디렉토리 명으로 복사. 없으면 디렉토리 생성 후 복사

```
crontab -l : 예약된 작업리스트
crontab -e : 예약된 작업 수정
crontab -r : 예약된 작업 삭제
```

```
chmod -R 777 [디렉토리 명]
```
권한 변경 명령어. 777은 모든 권한 -R은 하위 디렉토리까지 전부.

```
find 경로 -name '파일명'
find / -name 'my.ini'
```
파일 위치가 어디있는지 검색해줌
```
grep '찾을내용' [파일명] -5
```
파일명에 해당 내용이 포함되어있는지 찾아줌 -5는 찾은 내용 뒤의 5문장을 보여준다.
```
history
```
명령어 실행 이력 히스토리 를 볼 수 있다
```
dpkg -l [파일명]
```
해당 파일의 경로를 찾아준다
```
netstat -ntlp  | grep :[포트번호]
```
해당 포트를 사용중인 프로세스가 있는지 확인
```
(npm run start&)
```
해당 프로세스를 백그라운드로 실행하며 세션이 끊겨도 꺼지지 않음   
```
df -h [명령어]
```
마운트된 모든 파티션의 크기, 사용중인 공간, 사용 가능한 공간 정보 확인
```
du -hs /*
```
현재 경로의 하위 모든 파일 용량 체크
```
du -sh [파일경로]
```
해당 파일의 사용량을 출력(하위 디렉토리 포함)
```
timedatectl set-timezone 'Asia/Seoul'
```
OS Timezone 변경
```
cat [file1, 2, 3...] / cat > [filename] 
```
파일의 내용을 출력한다. > 기호를 쓰면 파일을 생성한다.

###2. linux 파일 자동 백업   

백업 디렉토리 생성 후 백업 스크립트 작성

```
vi [filename].sh
```
```
#!/bin/bash
tar -czpf [백업 디렉토리 명]/[tgz 파일명].`date +%Y%m%d%H%M%S`.tgz [백업 대상 디렉토리 or 파일] 1>/dev/null 2>/dev/null
find [백업 디렉토리명] -type f -mtime +14 | sort | xargs rm -f
```
crontab에 등록
```
0 4 * * * /root/backup.sh 1>/dev/null 2>/dev/null
```

**Sendmail 네임서버 설정**

telnet localhost 25로 텔넷진입후 메일보낸후   
cat /var/log/maillog | grep 메일id 로 메일로그 확인   
stat=queued 상태일시   
/etc/resolv.conf에서    
nameserver ip를 알맞게 수정   


###3. vi 명령어
```
shift + 우클릭
```
vi에서 붙여넣기  
```
gg
```
줄 맨 앞으로 이동
```
dd
```
한줄 삭제
```
dG
```
전체 삭제
```
:q!
```
강제 종료
***
   마지막 문서 수정일시 : 2020-12-24 22:52
***
   마지막 문서 수정일시 : 2020-12-24 22:54
***
   마지막 문서 수정일시 : 2020-12-24 22:54
***
   마지막 문서 수정일시 : 2020-12-25 08:31
***
   마지막 문서 수정일시 : 2020-12-25 08:31
***
   마지막 문서 수정일시 : 2020-12-25 12:26
***
   마지막 문서 수정일시 : 2020-12-28 16:57