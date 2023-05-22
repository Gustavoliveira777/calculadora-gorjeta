//import './App.css'
import Calculadora from './components/Calculadora.jsx'
import Header from './components/Header.jsx'
import { GlobalStyle } from './styles/Global.js'
export default function App() {

  return (
    <>
      <Header />
      <Calculadora />
      <GlobalStyle/>
    </>
  )
}

