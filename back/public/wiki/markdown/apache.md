apache
========   
첫 문서 등록일시 : 2020-03-20 15:27   

[1. https 설정 방법][id]
[id]:#1https
[2. http -> https 리다이렉트 하기][id2]
[id2]:#2httphttps
[3. Proxy(우회)기능][id3]
[id3]:#3proxy
[4. 가상호스트(서브 도메인) 설정방법][id4]
[id4]:#4

###1. https 설정 방법   

1. 인증서 만들기(crt, key)
2. conf파일 설정
```
SSLEngine on
SSLCertificateFile "/opt/bitnami/apache2/conf/xexeuniverse.com.crt"
SSLCertificateKeyFile "/opt/bitnami/apache2/conf/xexeuniverse.com.key"
```

###2. http -> https 리다이렉트 하기    

conf파일에서(port는 물론 80)  
```
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URL}
```

###3. Proxy(우회)기능   

conf파일에서 설정, 해당 URL로 접속시 다른 URL주소로 우회 시켜준다.

ex) 아파치 서버에서 express를 동시에 돌려야할 때 사용.

```
  SSLEngine on
  SSLProxyEngine On
  SSLCertificateFile "/[dirpath]/wiki.xexeuniverse.com.crt"
  SSLCertificateKeyFile "/[dirpath]/wiki.xexeuniverse.com.key"
  <Location />
    ProxyPass https://xexeuniverse.com:3000/
    ProxyPassReverse https://xexeuniverse.com:3000/
  </Location>
```

###4.가상호스트(서브 도메인) 설정방법   

Httpd.conf의 #Include conf/extra/httpd-vhosts.conf 주석 제거   
이후 httpd-vhosts.conf 설정   
[가상호스트 예 - Apache HTTP Server Version 2.2][url]
[url]:https://httpd.apache.org/docs/2.2/ko/vhosts/examples.html

***
   마지막 문서 수정일시 : 2020-03-21 10:16