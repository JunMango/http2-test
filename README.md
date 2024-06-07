<!-- @format -->

# HTTP2

이 프로젝는 node-express 와 React를 사용해서 웹 브라우저 상에서 h2 프로토콜로 데이터를 주고 받는지 확인하고 적용을 위해 만든 프로젝트 입니다.

## Server

서버를 동작 시키기 위해서는 server.cert 파일과 server.key 파일이 필요 합니다.

다음 명령어를 사용해서 개발 환경에서 받을수 있는 키를 만들어 주세요

     cd server

     npm run generate-cert

server.cert , server.key 가 잘 만들어 졌다면 다음 명령어를 실행하세요

    npm install express

    npm start

추가로 의존성이 필요한 부분들이 필요 할수 있습니다. 만약 "spdy" 나 "cors" 라이브러리가 없다고 오류가 날경우 다음 명령어를 사용하여 의존성을 추가해 주세요

    npm install spdy

    npm install cors

서버 동작 주소

<https://localhost:8000>

## Clent

client 파일을 동작 시키기 위해서는 다음 명령어를 실행 하세요

    cd client

    npm install

    npm start

클라이언트

<http://localhost:3000>

### 동작 사진 첨부

![http2-server](https://github.com/JunMango/http2-test/assets/83738337/783897f2-0368-4616-a457-62f63cbc3893) ![http2-console](https://github.com/JunMango/http2-test/assets/83738337/627b5e3b-9401-43b4-85d7-f57b188ca300) ![hppt2-network](https://github.com/JunMango/http2-test/assets/83738337/5e099b25-d291-4d67-bb60-43cc1df26146)
