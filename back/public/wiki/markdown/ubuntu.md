ubuntu
========   
첫 문서 등록일시 : 2020-03-18 16:54   

[1.][id] ubuntu LAMP 스택 설치
[id]: #1ubuntulamp

###1. ubuntu LAMP 스택 설치
```
apt-get update
apt-get-upgrade
$ sudo apt-get install apache2
service apache2 start
$ sudo apt-get install mysql-server
$ sudo add-apt-repository ppa:ondrej/php
$ sudo apt-get update
$ sudo apt-get install php7.2 php7.2-common
$ sudo apt-get install php7.2-mysql php7.2-curl php7.2-xml php7.2-zip php7.2-gd php7.2-mbstring
```

ubuntu os 기본 설치 용량 = 약 4.4GB   

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -apt install nodejs
```
우분투 Node.js 최신버전으로 설치 (10.x부분에 원하는 버전 입력)
***
   마지막 문서 수정일시 : 2020-03-19 17:29
***
   마지막 문서 수정일시 : 2020-03-19 17:29