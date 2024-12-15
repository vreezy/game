import './App.css'
import { Tick } from './components/tick/Tick'
import { Resources } from './components/resources/Resources'
import { Buildings } from './components/buildings/Buildings'
import { Options } from './components/options/Options'

function App() {

  return (
    <Tick>
      <Resources />
      <Buildings />
      <Options />
      Hello
    </Tick>
  )
}

export default App
