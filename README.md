<!-- @format -->

# HTTP2

이 프로젝는 node-express 와 React를 사용해서 웹 브라우저 상에서 h2 프로토콜로 데이터를 주고 받는지 확인 할려고 만든 프로젝트 입니다.

## Server

서버를 동작 시키기 위해서는 server.cert 파일과 server.key 파일이 필요 합니다.

다음 명령어를 사용해서 개발 환경에서 받을수 있는 키를 만들어 주세요

     cd server

     npm run generate-cert

server.cert , server.key 가 잘 만들어 졌다면 다음 명령어를 실행하세요

    npm start

서버 동작 주소

<https://localhost:8000/>

## Clent

client 파일을 동작 시키기 위해서는 다음 명령어를 실행 하세요

    cd client

    npm start

클라이언트

<http://localhost:3000//>
