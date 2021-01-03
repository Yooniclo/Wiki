mysql
========   
첫 문서 등록일시 : 2020-03-19 17:59   

[1. mysql 문법][id]
[id]:#1mysql
[2. mysql 저장엔진][id2]
[id2]:#2mysql
[3. 용어설명][id3]
[id3]:#3
[4. DB백업 & 복원][id4]
[id4]:#4db
[5. Skills][id5]
[id5]:#5skills


###1. mysql 문법   

```
show variables where Variable_name in ('version', 'log', 'general_log') // 제너럴 로그 활성상태 확인 (ON OR OFF)
show variables like '%log_output%' // 제너럴 로그 쌓이는 형태 확인 (TABLE OR FILE)
set global general_log = 1, 0 // 1이 ON 0이 OFF
set global log_output='TABLE' // 로그 쌓이는 형태 파일에서 테이블로 변경

----------------------------------
set global general_log = 0
RENAME TABLE mysql.general_log TO general_log_temp
DELETE FROM mysql.general_log_temp WHERE `event_time` < DATE(NOW())
RENAME TABLE mysql.general_log_temp To general_log
set global general_log = 1
// 제너럴 로그는 삭제 락이 걸려있어서 이름을 바꿔준다음 삭제해야된다.

```
제너럴 로그라고 로그 추적 가능

```
DATEDIFF(날짜1, 날짜2)
```
간단히 말하자면 날짜1 - 날짜2 동작입니다.
```
TIMESTAMPDIFF(단위, 날짜1, 날짜2)
```
단위 -   
SECOND : 초   
MINUTE : 분   
HOUR : 시   
DAY : 일   
WEEK : 주   
MONTH : 월   
QUARTER : 분기   
YEAR : 연   

날짜1과 날짜2 사이의 시간차이 계산해줌
```
CASE
	WHEN 조건
	THEN '반환 값'
	WHEN 조건
	THEN '반환 값'
	ELSE 'WHEN 조건에 해당 안되는 경우 반환 값'
END
```
SELECT문에서 CASE WHEN THEN을 이용해서 임의로 값을 설정 할 수 있다.
```
SELECT [컬럼명] FROM [테이블명] WHERE [컬럼명] NOT IN('컬럼값', '컬럼값')
```
특정 컬럼값을 제외하고 SELECT 해야 할때
```
SELECT CHAR_LENGTH('문자열')
SELECT LENGTH('문자열')
```
CHAR_LENGTH는 글자수로 체크   
LENGTH는 바이트수로 체크 해준다.
```
DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s')
```
현재시간을 입맛에 맞게 바꿔서 출력
```
SELECT id, post_date FROM wp_posts2 WHERE DATE(post_date)='2012-01-22';
SELECT id, post_date FROM wp_posts2 WHERE DATE(post_date) BETWEEN '2012-01-22' AND '2012-01-23';
```
시간을 조건으로 검색
```
INT(11) UNSIGNED [...]
```
INT의 범위가 음수에서 양수 포함인데 음수는 쓰지않으니까 UNSIGNED를 쓰면 양수로만 가능하고 사이즈도 늘어남
```
now()
```
현재 시간 출력
```
[SELECT 구문] UNION [SELECT 구문]
```
두 쿼리의 같은 컬럼을 결합해준다. 컬럼 명이 같아야 가능

```
GROUP BY [컬럼명]
```
중복된 컬럼명을 가지고 있을 경우 그룹화해서 보여준다. (1개로 요약해서)   

```
DATE_ADD(기준 날짜, INTERVAL) / DATE_SUB(기준 날짜, INTERVAL)
```
기준 날짜로 부터 시간을 더하고 뺀다 ex) SELECT DATE_ADD(NOW(), INTERVAL 1 SECOND)   

```
WHERE [column] IN( 조건1, 조건2, 조건3 )
```
OR과 비슷하나 좀더 쉬운 문법

```
INSERT INTO [table] [column1, column2 ...] SELECT [column1, column2 ...] FROM [table] WHERE [condition]
INSERT INTO [table] [column1, column2 ...] SELECT ['입력하고 싶은 값', column2 ...] FROM [table] WHERE [condition]
```
컬럼 복사, 값을 약간 변경하고 싶으면 2번째줄 참조.  
```
INSERT INTO (컬럼…) VALUES(‘값1’, ‘값2’),(‘값3’,’값4’)
```
값 여러개 넣기
```
UPDATE [테이블명] SET [컬럼1] = [값1], [컬럼2] = [값2]...
```
UPDATE문
```
SELECT  [join as 명].[join column명] FROM [테이블명] (AS생략가능) [join as 명] JOIN [테이블명] [join as 명] ON [조건]
ex) SELECT gg._id, gg.name, s.title FROM girl_group AS gg JOIN song AS s ON s._id = gg.hit_song_id;
```
INNER JOIN 문, ON절의 조건과 일치하는 결과만 가져온다.
```
SELECT  [join as 명].[join column명] FROM [테이블명] (AS생략가능) [join as 명] JOIN [테이블명] [join as 명] ON [조건]
```
OUTER JOIN 문, LEFT OUTER JOIN을 거의 대부분 사용하며 ON절의 조건 중 한쪽의 데이터를 모두 가져오고 없는 데이터는 NULL로 표시한다
```
Optimize table [테이블명]
```
테이블 최적화   
```
alter user 'root'@'localhost' identified with mysql_native_password by 'pw123'
```
mysql 계정 패스워드 변경(5.7버전 이상)
```
IFNULL( 필드명, 대체할 값)
```
필드의 값이 NULL을 반환할 때 다른 값으로 바꿔주는 함수
```
SELECT @rownum:=@rownum+1 as no, [column] WHERE (@rownum:=0)=0

SET @rownum:=0;
SELECT @rownum:=@rownum+1 as no, [column];
```
SELECT한 값의 number를 매기고 싶을 때 사용. 위와같이 2개의 방법을 소개한다.
```
EXPLAIN SELECT * FROM devpay.barcode_status WHERE tid = 156
```
rows를봐서 인덱스를 타는지 안타는지 확인 할 수 있다

###2. mysql 저장엔진

**MyISAM** = MYSQL 5.1까지의 기본 엔진. 트랜잭션 지원X   
**InnoDB** = MYSQL 5.5이후의 기본 엔진. 트랜잭션 지원O   
**ISAM** = MYSQL 기본 저장 엔진. 예전 형식으로 5.0부터는 지원X   
**MEMORY** = 데이터를 모두 메모리상에 보관하여 동작이 빠르다.   
**MERGE** = MyISAM의 여러 개의 테이블을 하나의 테이블 처럼 다룬다.   

###3. 용어설명   

**프로시저**

일련의 쿼리를 마치 하나의 함수처럼 실행하기 위한 쿼리의 집합이다.   
자바스크립트의 function은 하나의 값만 return 할 수 있지만 프로시저는 여러 row를 리턴가능.   
장점 : SQL 인젝션 보호, 쿼리문 보호, 세밀한 권한 제어, 일괄작업 유용, 조건문 기능, 동적 쿼리   
단점 : 디버깅 어려움, 유지보수 어려움, 짧은쿼리에선 비효율, 낮은 처리성능   
   
**인덱스**   

인덱스는 결국 지정한 컬럼들을 기준으로 메모리 영역에 일종의 목차를 생성하는 것입니다.   
Insert, update, delete 쿼리의 성능을 희생시켜 select 쿼리의 성능을 향상시킵니다.   
여기서 주의하실 것은 update, delete 행위가 느린것이지, update, delete를 하기 위해 해당 데이터를 조회하는것은 인덱스가 있으면 빠르게 조회가 됩니다.   

**트랜잭션**    

여러 단계의 처리를 하나의 처리처럼 다루는 기능을 트랜잭션이라고 한다.   
EX)박진영의 계좌에서 10만원을 감산하여 윤종신의 계좌에 10만원을 가산하는 처리를 하나의 묶음으로 처리하는 것 처럼.   
데이터베이스 세계에선 트랜잭션을 사용하지 않으면 한번 변경된 데이터는 원래 상태로 되돌릴 수 없다고 보아야 한다.   

**이벤트&스케쥴러**   

특정 이벤트를 자동으로, 정기적으로 수행시킬 수 있다   
ex )   
```
CREATE EVENT IF NOT EXISTS '테스트'
    ON SCHEDULE
           EVERY 1 DAY
    ON COMPLETION NOT PRESERVE
    ENABLE
    COMMENT '테스트 입니다.'
    DO 
    INSERT INTO TEST_TABLE ('TEST1', 'TEST2') VALUES ('테스트', NOW())
END
```

**트리거**   

테이블에 대한 이벤트에 반응해 자동으로 실행되는 작업을 의미한다.
DML의 데이터 상태 관리를 자동화하는데 사용된다.
트리거를 이용해 데이터 작업 제한, 작업 기록, 변경 작업 감사 등을 할 수 있다.
트리거는 트랜잭션 제어문(COMMIT, ROLLBACK, SAVEPOINT 등)을 사용할 수 없습니다.
```
INSERT INTO [TABLE] (COLUMN1, COLUMN2...) VALUES ( V1, V2 )에서 NEW.V1와 같이 값을 가져와서 사용 가능
```
여러개의 트리거 구문을 넣을때, 구분 단위가 DELIMETER 이다.

###4. DB백업 & 복원   

```
mysqldump -u [사용자 계정] -p [패스워드] [원본 데이터베이스명] > [생성할 백업 DB명].sql
mysqldump -u user -p password > backup_test_db.sql
```
DB백업
```
mysql -u [사용자 계정] -p [패스워드] [복원할 DB] < [백업된 DB].sql
mysql -u test_user -p test_db < backup_test_db.sql
```
DB복원
  
```
mysqldump -u [사용자 계정] -p [패스워드] [데이터베이스명] [원본 백업받을 테이블명] > [백업받을 테이블명].sql
mysqldump -u test_user -p test_db test_table > backup_test_table.sql
```
테이블 백업
```
mysql -u [사용자 계정] -p [패스워드] [복원할 DB ] < [백업된 테이블].sql
mysql -u test_user -p 123456 test_db < backup_test_table.sql
```
테이블 복원

###5. Skills   

```
SELECT ROW_NUMBER() over()
SELECT char(ROW_NUMBER() over()+64) AS rowno
```
조회되는 행에 맞게 rownum 뿌려주는 쿼리,
두번째줄 처럼 A, B, C 알파벳순으로도 가능 

```
UPDATE seat SET position_y = position_y - 85 WHERE store_id = 541 AND seat_id IN 
(SELECT seat_id FROM seat WHERE store_id = 541 AND seat_id BETWEEN 1266 AND 1275)
```
1씩 증가되는 어떤 id값의 값을 일괄변경해야 될때 조건을 여러개 적지 말고 한번에 주는 법

```
SELECT Host,User,plugin,authentication_string FROM mysql.user;
```
MYSQL 권한 체크 하는 쿼리, '%'이 포함되어있지 않으면 외부 접근이 안된다.

```
CREATE USER 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
```
root으로 접속했는데도 GRANT 명령어가 안먹히는 경우 위의 쿼리 실행 필요
```
use_start_datetime < DATE_ADD(NOW(), INTERVAL 60 MINUTE)
AND
DATE_ADD(NOW(), INTERVAL 60 MINUTE) > NOW()
```
예약내역 체크하는 쿼리, 이거 단 두줄로   
내가 사용할 시간 그 사이에만 예약내역이 있는지 정확히 체크해준다.
***
   마지막 문서 수정일시 : 2020-09-14 15:05
***
   마지막 문서 수정일시 : 2020-10-08 11:00
***
   마지막 문서 수정일시 : 2020-11-26 10:35
***
   마지막 문서 수정일시 : 2020-12-11 09:36
***
   마지막 문서 수정일시 : 2020-12-11 09:38
***
   마지막 문서 수정일시 : 2020-12-14 17:25
***
   마지막 문서 수정일시 : 2020-12-14 17:26