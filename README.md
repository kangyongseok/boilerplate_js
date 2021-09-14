## express
Nodejs 웹 프레임워크이며 서버를 구성할 수 있습니다. HTTP 통신요청에 대한 핸들러를 만들거나 웹서버로 만들수도 있습니다.
  
### 설치
```bash
npm init -y
npm i express --save
```
[npm(Node Package Manager)](https://www.npmjs.com/) 는 자바스크립트를위한 패키지 관리자로 자바스크립트의 런타임환경인 [Node.js](https://nodejs.org/ko/) 의 기본 패키지 관리자입니다. Node.js 를 설치하면 자동으로 딸려옵니다.
  
Nodejs 는 V8 엔진으로 빌드된 자바스크립트 런타임입니다. V8 엔진은 크롬에서도 사용중인 자바스크립트실행 엔진입니다. 
  
```js
node -v // v14.16.0
npm -v // 6.14.11 
```
만약 Node.js 가 설치되어있는지 확인하고싶으면 터미널에 위와같은 명령어로 버전이 뜨는지 확인하면 됩니다. 
  
다시 돌아와서 
```bash
npm init -y
```
해당 명령어는 `package.json` 이라는 파일이 생성되게 해주는데 `-y` 를 붙여주게되면 대화형 설치를 건너띌 수 있습니다. `-y` 라는 옵션 없이 `npm init` 을 사용하면 몇가지 질의를 거쳐 파일이 생성됩니다. 프로젝트명이라던지 진입점 파일명은 index.js 로 할건지 `author` 는 누군지 등등
  
```json
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kangyongseok/boilerplate_js.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/kangyongseok/boilerplate_js/issues"
  },
  "homepage": "https://github.com/kangyongseok/boilerplate_js#readme",
}
```
저는 지금 `github` 이 연동된 상태라 자동으로 `repository` 나 버그리포트가 남을 issues 와 깃헙페이지가 자동으로 작성되어서 생성되었습니다. 하나씩 살펴보자면
`name`: 


## webpack



## babel