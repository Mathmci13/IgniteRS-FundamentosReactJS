import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';

//Ultima aula assistida = "Aplicando Responsividade" -modulo 2
function App() {

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post/>
        <Post/>
      </main>
      </div>
    </>
  )
}

export default App

//Default Exports vs Named Exports
//Default - possivel alterar nome no import
//Named, declarado em cima, com o nome exato, importado por {}
