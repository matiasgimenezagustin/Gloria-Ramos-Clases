import React from 'react'
import Title from './Components/Title'
import {Link, Logs} from './Components'

const App = () => {
  let nombre = 'Pepe'
  let apellido = 'Suarez'

  return (
    <div>
      hola
      {nombre + ' ' + apellido}
      <Title content={'Hola mundo'} edad={5}/>
      <Title content={'Buen dia'} edad={9}/>
    <Link/>
    <Logs/>
    </div>
  )
}

export default App
