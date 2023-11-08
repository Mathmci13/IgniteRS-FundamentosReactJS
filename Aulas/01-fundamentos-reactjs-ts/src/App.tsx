import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";


const posts : PostType[]= [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Mathmci13.png",
      name: "Matheus Chagas Iglesias",
      role: "Desenvolvedor Junior",
    },
    content: [
      { type: "paragraph", content: "Opa, salve! 😁" },
      {
        type: "paragraph",
        content:
          "Este é um teste do componente de Post, ficou bem legal! Projeto junto ao Ignite da rocketseat!",
      },
      { type: "link", content: "teste de link" },
    ],
    publishedAt: new Date("2023-10-22 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mathmci13.png",
      name: "Batman",
      role: "Vigilante",
    },
    content: [
      { type: "paragraph", content: "Eu sou a vingança" },
      {
        type: "paragraph",
        content:
          "Não é apenas um chamado. É um aviso para eles ... O medo é uma ferramenta. Eles pensam que estou me escondendo nas sombras, mas eu sou as sombras. Eu gostaria de poder dizer que estou fazendo a diferença, mas eu não sei",
      },
      { type: "link", content: "batman.com.br" },
    ],
    publishedAt: new Date("2023-10-22 22:00:00"),
  },
];
//Ultima aula assistida = "Entendendo closures no React" - fim do modulo 3
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;

//Default Exports vs Named Exports
//Default - possivel alterar nome no import
//Named, declarado em cima, com o nome exato, importado por {}
