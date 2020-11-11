import './App.css';
import { Header } from './components/Header'

import { GlobalStyle } from './styles/style'
import { Routes } from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Routes></Routes>
      </div>
    </Router>
  )
}

export default App;
