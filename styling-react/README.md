# React Component Styling Practice
> [reference](https://velog.io/@velopert/react-component-styling)
## Sass
Sass는 CSS pre-processer로서, 다음과 같은 특징이 있습니다.
1. 복잡한 작업을 쉽게 할 수 있게 합니다.
2. 코드의 재활용성을 높여줍니다.
3. 코드의 가독성을 높여 유지보수가 쉬워집니다.


### 준비
Sass를 CSS로 변화시켜주는 `node-sass` 모듈을 설치합니다.
```
$ yarn add node-sass
```

## Webpack sass-loader 설정
sass-loader 설정을 커스터마이징하기 위한 작업 또한 해줍니다.

### 개요
styling-react App의 `src/components/SassComponent.scss`에서 `src/styles/utils.scss`를 load할 때 다음과 같이 해주었습니다.
```javascript
@import '../styles/utils.scss'
```

이 경우 프로젝트 디렉터리의 로직이 깊어질수록 import 할 때 거슬러 올라가야 한다는(?) 단점이 있습니다.
```javascript
// example
@import '../../../../../../utils.scss'
```

이 문제를 해결하기 위해 webpack에서 sass를 처리하는 `sass-loader`의 설정을 커스터마이징해야 합니다. 초기에는 create-react-app으로 프로젝트를 만들었기 때문에 프로젝트 구조의 복잡도를 낮추기 위해 세부 설정들이 모두 숨어있습니다. 그러므로 다음 명령어를 통해 세부 설정들을 다시 밖으로 꺼내줍니다.
```
// Projects made with create-react-app also has git configs.
// You should commit differences before command `yarn eject`
$ git add .
$ git commit

$ yarn eject
yarn run v1.17.3
warning ..\package.json: No license field
$ react-scripts eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

? Are you sure you want to eject? This action is permanent. (y/N) y
```

성공적으로 eject되고 나면 프로젝트 내에 config 경로가 생성됩니다. 여기서 config 내부의 webpack.config.js에서 sassRejex를 찾아봅니다.

```javascript
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'sass-loader'
  ),
  sideEffects: true,
}
```

여기에서 use: 부분을 다음과 같이 수정합니다.
```javascript
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    }
  ).concat(
    {
      loader: require.resolve('sass-loader'),
      options: {
        includePaths: [paths.appSrc + '/styles'],
        sourceMap: isEnvProduction && shouldSourceMap
      }
    }
  ),
  sideEffects: true,
}
```

getStyleLoaders로 만든 배열 뒷부분에 우리가 사용할 loader를 options와 함께 프로젝트에 적용시킬 수 있게 되었습니다.
설정을 해주고 나서는 서버를 재시작합니다.