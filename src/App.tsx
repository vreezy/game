import './App.css'
import { Tick } from './components/tick/Tick'
import { Resources } from './components/resources/Resources'
import { Buildings } from './components/buildings/Buildings'
import { Options } from './components/options/Options'
import { Age } from './components/age/age'

function App() {

  return (
    <Tick>
      <Resources />
      <Buildings />
      <Options />
      <Age />
      
    </Tick>
  )
}

export default App
