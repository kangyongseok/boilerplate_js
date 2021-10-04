# 프론트엔드 개발환경 구축하기
프론트엔드개발환경은 다양한 도구들의 사용의 집합체가 되어가고 있습니다. 별다른 표준이 없기 때문에 같은 도구나 라이브러리를 사용하더라도 다른 결과물과 효율성이 나옵니다. 이 프로젝트는 VanilaJS 로 SPA를 구현하는 프론트엔드 개발환경을 구축하는 보일러플레이트를 만들어 보려고 합니다. 프론트엔드개발환경을 이루는 다양한 도구들에 대해서 더 이해하고 현업에서 좀더 알맞은 환경으로 수정하여 사용해 보기 위함입니다.
  
프론트엔드 개발환경을 구축하기위해 필요한것들은 아래와 같습니다.
```bash
Node.js
npm
pakage.json
webpack
babel
eslint
prettier 
typescript
express
jest
Visual Studio Code
```

## 프론트엔드 개발환경 구축을 위한 도구에 대한 이해
처음 서문에서 나열한것처럼 프론트엔드 개발환경을 구축하기위해서는 많은 도구의 사용을 필요로합니다. 물론 없어도 개발을 못하는건 아니지만 저런 도구들은 자바스크립트에 날개를 달아주고 개발의 효율성과 생산성을 높여주기때문에 이제는 필수불가결한 요소들이기도합니다. 해당 도구들의 개념에 대해서 간략하게 이해하려고 합니다.

### Node.js
```bash
`Node.js` 는 `Chrome V8 JavaScript` 엔진으로 빌드된 `JavaScript 런타임`입니다. 
```
일단 `런타임` 이 무슨말인지 알아야 이해할 수 있습니다. 런타임은 컴퓨터과학에서 컴퓨터 프로그램이 실행되고 있는 동안의 동작을 말합니다. 개발을하면서 검색을 많이 하게될텐데 그러다보면 가끔 `런타임에러` 라는 말을 종종 보거나 듣게 될겁니다. 
  
런타임에러는 코드가 실행되고있는동안 발생한 에러를 말합니다. 자바스크립트로 치자면 웹이 자바스크립트코드를 읽고 해석하면서 실행하는 과정에서 즉 클라이언트단에서 발생한 자바스크립트에러를 런타임에러라고 볼 수 있습니다.
  
크롬 브라우저에는 V8 이라는 엔진이 내재되어있고 이 엔진이 자바스크립트를 실행하는 과정에서 발생한 에러를 말합니다. Nodejs 도 V8 엔진으로 빌드되었습니다. 기존의 자바스크립트는 웹 브라우저라는곳에서만 실행할 수 있었지만 Node.js 가 등장하면서 웹브라우저의 밖에서도 자바스크립트 코드를 실행할 수 있는 런타임 환경이 생긴것입니다.
  
Node.js 덕분에 자바스크립트로 백엔드환경을 구성할수도있고 데스크톱 애플리케이션을 만들수도 있습니다. 프론트에서는 개발환경 웹서버를 생성하여 웹팩같은 도구를 활용하여 생산성을 높일 수 있게 되었습니다.
  
### npm
npm 은 `Node Package Manager` 의 약자로 자바스크립트 프로그래밍 언어를 위한 패키지 관리자입니다. npm 역시 자바스크립트로 작성되어있고 개발하면서 사용하게되는 패키지들의 관리를합니다. 또다른 패키지관리로 `yarn` 을 사용할수도 있습니다. npm 은 Node.js 를 설치하면 자동으로 설치되고 버전을 확인할 수 있습니다.
```bash
node -v
npm -v
```
터미널에서 `npm install 패키지명` 으로 프로젝트에 사용할 패키지를 설치할 수 있으며 `npm init -y` 란명령어로 `package.json` 파일을 생성하고 사용할 수 있습니다. 
  
package.json 은 프로젝트 관리 파일로 개발환경에 필요한 패키지와 실제 프로덕션에서도 사용될 패키지를 분리하여 설치하고 관리할 수 있습니다. 또한 이 패키지파일만 있으면 어느곳에서라도 동일한 개발환경을 세팅하고 동일한 패키지버전을 사용할 수 있어 협업할때 개발 환경이 달라서 발생할 수 있는 문제들을 방지할 수 있습니다.
  
패키지를 install 하게되면 `package-lock.json` 이란 파일이 생성되는데 해당 파일에는 프로젝트에 설지한 패키지 노드모듈들의 의존성 트리를 기록하고 있습니다.
  
package.json 이 패키지의 버전을 갖고있지만 npm install 할때마다 최신 버전이 있다면 그 버전으로 설치되는 경우가 발생합니다. 이 락 파일은 기존 프로젝트에서 설치되어있던 버전들을 갖고있다가 새로운 install 이 발생했을때 버전의 변경이 발생하지 않도록 해주는 파일입니다.
  
만약 상대방도 나와 동일한 버전의 패키지를 가진 개발환경을 갖기를 원한다면 `package.json` 과 `package-lock.json` 파일을 같이 넘겨주어야 합니다.

#### npm vs yarn
그렇다면 npm 이란 패키지 관리자가 이미 있는데 yarn 이란건 왜 생겼고 npm 과 뭐가 다른지 궁금할 수 있습니다. 궁금해 해야합니다. 
  
yarn 은 페이스북에서 만든 자바스크립트 패키지 매니저로 npm 과 동일한 기능을 수행합니다. yarn 은 npm 보다 나중에 나온만큼 npm 이 갖는 단점을 개선해서 등장하였습니다.
- 속도
- 안정성
- 보안성
  
속도는 npm 과 yarn이 패키지를 관리하는 방식때문에 속도차이가 납니다. yarn 은 다운받은 패키지데이터를 캐시에 저장하여 중복된 데이터는 다운로드하지않고 캐시에 저장된 파일을 활용합니다. 또한 여러개의 패키지를 설치할때 병렬로 처리하기때문에 순차적으로 처리하는 npm 보다 빠릅니다.
  
npm 은 다른 패키지를 즉시 포함시킬 수 있는 코드를 자동으로 실행하기때문에 보안에 취약한부분이 있느데 yarn 은 .lock 에있는 파일만 설치하기때문에 안정성과 보안이 높다고 말합니다.
  
npm 은 패키지를 찾기위해서 상위 디렉토리의 `node_modeuls` 폴더를 탐색합니다. 때문에 상위 디렉토리가 어떤 node_modeuls 를 포함하고 있는지에 따라 의존성을 불러올수도 없을수도있고 다른 버전의 의존성을 잘못 불러올 수도있습니다.
  
또한 npm 에서 구성하는 node_modules 디렉토리 구조는 매우 큰 공간을 차지합니다. 그리고 node_modules 폴더는 복잡하기 때문에 설치가 유효한지 검증하기 어렵습니다.

### npx
npx 는 npm 5.2.0 버전부터 새로 추가된 도구입니다.  
npm 을 사용할때 설치도구들을 전역으로 설치하는것 대신에 프로젝트 로컬에 `devDependencies` 로 설치하였습니다. 이로인해 프로젝트별로 각각의 버전을 가질 수 있었습니다. 다만 CRA 같은경우 최초 한번만 실행하여 사용하는데 global 하게 설치할경우 여러 문제가 발생할 수 있습니다. 
- 자주 사용하지않는 무거운 패키지가 로컬에 남게됩니다.
- 로컬에 있는 패키지이더라도 새로운 버전이 나왔다면 기존 패키지를 제거하고 다시 설치해야합니다.
  
npx 를 사용하면 로컬에 특정 버전의 패키지를 저장하는것이 아닌 바로 실행시킬 수 있습니다. 설치할때만 잠시 패키지가 존재햐다가 설치가 완료되거 제거합니다. 그리고 npx 는 항상 최신 버전상태로 패키지를 실행합니다.
  
로컬에 패키지가 존재하고있어 발생하는 버전 불일치와 불필요한 무거운 패키지를 로컬에서 갖고있을 필요없이 npx 를 사용하면 해결할 수 있습니다.
  
npm 으로 패키지를 실행하려면 package.json 파일에 해당 패키지를 실행하라고 지정해야합니다.
```bash
npm init -y
npm install
up to date in 0.396s

yarn init -y
yarn install
Done in 0.09s.
```
그냥 기본 초기화상태에서 각각 install 을 했을때 npm 과 yarn 의 속도차이가 존재하는걸 확인할 수 있습니다. 

## express
Nodejs 프레임워크중 하나인 express 를 활용하여 간단한 웹 서버를 생성하려고 합니다. 웹서버를 만들게되면 Vanila JS 를 사용하더라도 router 를 구현할 수 있으며 리소스에대한 캐시를 직접 컨트롤 할 수 있습니다. 
  
```bash
yarn add express
```
먼저 express 패키지를 설치합니다. 그리고 익스프레스 웹 서버를 실행하기위한 코드를 작성합니다.

```js
// server.js
const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, () => { console.log(`server start PORT: ${port}`) })
```
server.js 파일을 생성하고 express 를 불러옵니다. express 를 호출하여 app 이란 변수에 할당하고 포트를 지정합니다. 
```js
app.use(express.static(__dirname))
```
app.use 는 미들웨어함수를 지정할 수 있습니다. express 서버에 웹을 띄우기위해서 __dirname 으로 절대경로를 지정해 줍니다. `__dirname` 은 현재 실행중인 파일의 절대경로 즉 root 를 말합니다.
`__dirname/index.html` 을 지정하는것은 루트 절대경로에 존재하는 index.html 파일을 사용하겠다는것과 같은말입니다. 
  
만약 가상경로이름을 지정하고 싶다면
```js
app.use('/static', express.static(__diename));
```
으로 지정할 수 있고 만약 루트에 있는 파일들에 접근하려면 `http://localhost:5000/static/index.html` 이런식으로 접근할 수 있습니다.








<!-- ## express

Nodejs 웹 프레임워크이며 서버를 구성할 수 있습니다. HTTP 통신요청에 대한 핸들러를 만들거나 웹서버로 만들수도 있습니다.

### 설치

```bash
npm init -y
npm i express
```

[npm(Node Package Manager)](https://www.npmjs.com/) 는 자바스크립트를위한 패키지 관리자로 자바스크립트의 런타임환경인 [Node.js](https://nodejs.org/ko/) 의 기본 패키지 관리자입니다. Node.js 를 설치하면 자동으로 딸려옵니다.

Nodejs 는 V8 엔진으로 빌드된 자바스크립트 런타임입니다. V8 엔진은 크롬에서도 사용중인 자바스크립트실행 엔진입니다.

```js
node - v; // v14.16.0
npm - v; // 6.14.11
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
  "homepage": "https://github.com/kangyongseok/boilerplate_js#readme"
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

app.get('/', function(req, res) {
  res.send('Hello World!');
});

function handelListen() {
  console.log(`Server Start ${PORT}`);
}

app.listen(PORT, handelListen);
```

## webpack

```bash
npm install webpack webpack-dev-middleware webpack-hot-middleware -D
```

webpack 은 번들러이다. 웹팩을 사용하면 흩어져있던 파일들을 하나의 파일로 만들 수 있고 개발환경과 실환경을 나눠서 번들링되도록 만들수도있습니다.

그리고 이런 webpack 과 express 를 같이 사용하면 변경사항을 자동으로 반영하는 `hot reload` 환경을 만들 수 있습니다. 다른 의존성 패키지 모듈의 도움을 받아 웹팩과 express 환경설정을 통해 가능합니다.

## babel

## ESlint

```bash
npm i -D eslint
npx eslint --init
```

## Prettier

```bash
npm i -D --save-exact prettier
```

### Prettier 와 ESlint 충돌 방지

```bash
npm i -D eslint-plugin-prettier eslint-config-prettier
```

**eslint-plugin-prettier**
eslint 에 프리티어의 포매팅 기능을 추가

**eslint-config-prettier**
eslint 에서 프리티어와 겹치는 포매팅을 제거 -->
