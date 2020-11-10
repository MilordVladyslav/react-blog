import './App.css';
import { Header } from './components/Header'
import { Content } from './components/Content'
import { GlobalStyle } from './styles/style'
function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default App;
