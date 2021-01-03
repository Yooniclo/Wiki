AWS
========   
첫 문서 등록일시 : 2020-03-18 17:00   

[1. AWS 서비스][id]
[id]:#1AWS
[2. AWS 각종 설정 방법][id2]
[id2]:#2AWS

###1. AWS 서비스   
**EC2**   

켜놓은 시간 기준 과금 구조의 클라우드 서버, 트래픽이 몰리면 인스턴스를 자동으로 늘려준다.    
온 디맨스 인스턴스(사용만큼과금)   
스팟 인스턴스(사용되지 않는 EC2자원을 경매로 낙찰받아 사용)   
예약 인스턴스(사용 기간을 예약하여 선납하면 할인해줌) 과금 구조가 있다.

**Ligthtail**   

EC2 보다 간소화된 VPS 서비스. 서울에 리전이 있다

**Lambda**   

이벤트가 발생하면 코드를 실행하는 앱 엔진. Serverless Architecture를 구축할 때 사용한다. PHP는 지원안하지만 구글 앱 엔진에서 사용가능.

**S3**   

무제한 용량을 제공하는 클라우드 스토리지 서비스. 사용한 만큼만 비용지불.   
계산은 EC2에서, 저장은 S3에서.
 
**RDS**   

MYSQL과 비슷한 관계형 데이터베이스 서비스, 대용량 트래픽을 처리해야 하는 기업 사용자용이다.

**DynamoDB**   

MongoDB와 비슷한 NOSQL 데이터베이스

**API Gateway**   

HTTP 요청으로 Lambda 이벤트를 생성, HTTP Proxy, 기타 AWS 서비스와 연결 그리고 VPC 링크로의 연결을 가능케하는 서비스이다.   
Lambda와 함께 Serverless Architecture를 구성하는 핵심 요소이다.


###2. AWS 각종 설정 방법   

**AWS 로드밸런서로 HTTPS 등록하기**   

[https://docs.aws.amazon.com/ko_kr/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html][link]   
[link]:https://docs.aws.amazon.com/ko_kr/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html

로드밸런서 생성후 보안 그룹 인바운드에 ::/0이 있을 경우 삭제
이후 ROUTE 53 A의 Alias Yes 선택후 생성한 로드밸런스를 라우팅한다.
***
   마지막 문서 수정일시 : 2020-03-19 18:26
***
   마지막 문서 수정일시 : 2020-03-19 18:27