styled-components
========   
첫 문서 등록일시 : 2020-12-31 11:22   
```
import styled, { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}

      <AppBlock>
        <Button>BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
      </AppBlock>
    </ThemeProvider>
  )
}
```
styled-components 에서 전역변수를 사용할때는 ThemeProvider를 이용한다