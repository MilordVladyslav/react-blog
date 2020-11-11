import './App.css';
import { Header } from './components/Header'
import {useDispatch} from "react-redux"
import { GlobalStyle } from './styles/style'
import { Routes } from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import {fetchArticles} from "./features/articlesSlices"

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0)
  useEffect(() => {
    dispatch(fetchArticles())
  },[number])

  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header></Header>
        <Routes></Routes>
      </div>
    </Router>
  )
}

export default App;
