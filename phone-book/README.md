전화번호부 App
===
# Components
## PhoneForm
사용자로부터 정보를 입력받는 Form입니다.

## PhoneInfo
각 전화번호 정보를 보여줍니다.
```javascript
// info 객체의 형태
static defaultProps = {
  info: {
    id: 0,
    name: "name",
    phoneNumber: "010-0000-0000"
  }
}

...

render() {
  ...
  const {
    id, name, phoneNumber
  } = this.props.info
}
```

info라는 객체를 만들어 props로 받아와서 렌더링합니다. 
여기서 id 값은 각 데이터(전화번호) 하나하나를 식별하기 위한 primary key 역할을 합니다. id 값은 데이터 하나를 추가로 생성할 때마다 1씩 증가합니다.

```javascript
// App.js
handleCreate = (data) => {
  const { information } = this.state
  this.setState({
    // add information data (Phoneinfo)
    information: information.concat({
      id: this.id++,
      ...data })
  })
}
```

id 값은 실제 react app 실행 페이지에서는 나타나지 않습니다.
```javascript
return (
  <div style={style}>
  <div><b>{name}</b></div>
  <div>{phoneNumber}</div>
  </div>
)
```
PhoneInfo의 return 부분 코드를 보면, 이름과 전화번호만 App component에 전달된다는 것을 확인할 수 있습니다.

## PhoneInfoList
여러 개의 PhoneInfo components를 보여줍니다.
```javascript
const list = data.map(
  info => (<PhoneInfo key={info.id} info={info}/>)
)
```
`components/PhoneInfo.js`의 info 객체는 `info: {id, name, phone}` 형식의 배열로 만들어집니다. 이 배열을 컴포넌트로 변해주는 역할이 `PhoneInfoList`입니다.