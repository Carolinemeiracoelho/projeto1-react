import {Header} from './components/Header'
import { Bio } from './components/Bio'
import {Cards} from './components/Cards'
import {Footer} from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header content="Meu site"/>
      <Bio />
      <Cards />
      <Footer content="Feito com 🧡 por Caroline."/>
    </div>
  )
}

export default App
