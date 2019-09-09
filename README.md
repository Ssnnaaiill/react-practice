개인 React 공부 레포지토리
===
> React 개인 공부한 내용을 정리해두는 레포지토리입니다.

# 2019.09.09
- React, Webpack, Babel에 대해서 알게 되었습니다.
## React app 생성하기

npm 또는 yarn으로 create-react-app을 설치합니다.
```shell
# npm
npm install -g create-react-app
# yarn
yarn global add create-react-app
```

macOS라면 yarn global 설치가 제대로 작동하기 위해서는 다음 명령어를 먼저 입력해야 합니다.
```shell
echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bash_profile
```

`create-react-app {project name}` 과 같은 형식으로 React app를 생성합니다.
```shell
create-react-app hello-react
```