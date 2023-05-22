import { Post } from './Post'
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

//Ultima aula assistida = "Componente: Header" -modulo 2
function App() {

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post
          author="Matheus Chagas"
          content="Apenas um teste do componente de Post!"
        />
        <Post
          author="Diego da RocketSeat"
          content="Não confundir com o Diego do RocketLeague "
        />
      </main>
      </div>
    </>
  )
}

export default App

//Default Exports vs Named Exports
//Default - possivel alterar nome no import
//Named, declarado em cima, com o nome exato, importado por {}
