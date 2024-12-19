import './App.css'
import { Tick } from './components/tick/Tick'
import { Resources } from './components/resources/Resources'
import { Buildings } from './components/buildings/Buildings'
import { Options } from './components/options/Options'
import { Age } from './components/age/age'
import { Speed } from './components/speed/Speed'
import { Science } from './components/Science/science'

function App() {

  return (
    <Tick>
      <Resources />
      <Speed />
      <Buildings />
      <Options />
      <Age />
      <Science />
      
    </Tick>
  )
}

export default App
