## express
Nodejs 웹 프레임워크이며 서버를 구성할 수 있습니다. HTTP 통신요청에 대한 핸들러를 만들거나 웹서버로 만들수도 있습니다.
  
### 설치
```bash
npm init -y
npm i express
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
저는 지금 `github` 이 연동된 상태라 자동으로 `repository` 나 버그리포트가 남을 issues 와 깃헙페이지가 자동으로 작성되어서 생성되었습니다.
  
해당 파일은 패키지를 관리하고 스크립트 명령어를 정의할 수 있으며 해당 파일만 있으면 어디서든 동일한 패키지파일을 동일한 버전으로 사용할 수 있습니다. 만약 재설치가 필요로 하다면 해당 파일이 위치한 루트디렉토리에서 `npm i` or `npm install` 명령어만 입력해주면 됩니다.
  
하나씩 살펴보겠습니다.
  
- `name`: npm 을통해 자바스크립트 패키지를 설치해 활용할 수도있지만 내가 만든 패키지를 업로드할 수도있습니다. 그때 이 네임은 패키지명이되고 `version` 과 함께 완전히 고유한 식별자를 형성합니다.
- `version`: npm 에 패키지를 개시할거라면 버전변경과 함께 제공해야합니다.
- `description`: 패키지에 대한 설명을 작성합니다. 패키지를 서치할때 도움되는 설명을 적으면 됩니다.
- `main`: 진입점 파일을 명시합니다.
- `scripts`: 다양한 스크립트 명령어를 지정할 수 있습니다.
  - ex) `npm run test`
- `keywords`: description 과 마찬가지로 npm 에서 패키지를 서치할때 도움되는 키워드를 배열로 나열할 수 있습니다.
- `license`: 는 패키지에 대해 사용할 수 있는 권한을 명시하는것이라고 볼 수 있습니다.
  
이 package.json 중에서 중요하게 알아야할 부분은 npm 에 새 패키지 파일을 올릴것이 아니라면 
- script
- dependencies
- devDependencies
  
이렇게 세가지를 제일 눈여겨봐야합니다.
 
- dependencies
- devDependencies
  
이 두가지는 아직 추가되지않았는데 `npm i 패키지명` 을 통해서 추가할 수 있습니다. 해당 프로젝트는 여기에 추가된 패키지들에 의존성을 갖는다 라고 해석할 수 있고 `development` 환경인지 `production` 환경인지에 따라 추가되는 곳이 달라집니다.
  
개발환경에서 필요한 패키지인경우 `devDependencies` 에 추가를해야하고 배포시에도 활용되는 패키지라면 `dependencies` 에 추가되어야 합니다. 
  
추가되는 방식은 설치할때 옵션으로 지정해줘야합니다.
  
```js
npm i --save -D 패키지명 // devDependencies 에 추가
npm i --save 패키지명 // dependencies 에 추가
```
만약 npm 버전이 5 이상이라면 `--save` 라는 옵션은 지정하지않아도됩니다. 자동으로 포함되어있어서 `npm -i 패키지명` 만 해도 자동으로 `dependencies` 환경으로 추가가됩니다.
  
```bash
npm i express
```
이걸 하기위해서 이 먼길을 돌아왔습니다. express 라는 패키지를 설치해서 서버를 구성하려고 합니다. express 가 없었을땐 내장된 http 모듈을 불러와서 서버를 세팅해야했는데 꽤 번거로운 부분들이 많이 있었습니다. 이런 부분들은 express 를 사용함으로써 클린하게 사용가능하고 쉽게 서버를 구축하고 활용할 수 있습니다.

```json
{
  "dependencies": {
   "express": "^4.17.1"
  }
}
```
`-D` 라는 옵션을 붙이지 않았기 때문에 `dependencies` 에 추가된걸 확인할 수 있습니다. 만약 패키지를 제거하고싶다면 `npm uninstall 패키지명` 을 입력해주면 패키지가 제거됩니다.
  
### express 실행
이제 express 를 실행해 보도록 하겠습니다. 루트디렉토리에 `server.js` 파일 을 생성하고 아래와 같은 코드를 작성합니다.
```js
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

function handelListen() {
  console.log(`Server Start ${PORT}`)
}

app.listen(PORT, handelListen);

```


## webpack



## babel