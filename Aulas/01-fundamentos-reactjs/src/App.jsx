import { useState } from 'react'
import { Post } from './Post'

//Ultima aula assistida = "Propriedades" ultima do modulo 1
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post
        author="Matheus" 
        content="Apenas um teste do componente, post numero 1"
      />
      <Post
        author="Matheus C." 
        content="Apenas um teste do componente, post numero 2"
      />
    </>
  )
}

export default App

//Default Exports vs Named Exports
//Default - possivel alterar nome no import
//Named, declarado em cima, com o nome exato, importado por {}
