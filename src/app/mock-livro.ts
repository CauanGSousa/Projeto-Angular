import { Livro } from "./componentes/livro/livro.interface";

export const livros: Livro[] = [
  {
    id: 1,
    titulo: "Angular: Up and Running",
    autoria: "Shyam Seshadri",
    imagem: "angular-book.jpg",
    favorito: false,
    genero: {
      id: "romance",
      value: "Romance",
      livros: [],
    },
  },
  {
    id: 2,
    titulo: "Angular: Up and Running",
    autoria: "Shyam Seshadri",
    imagem: "angular-book.jpg",
    favorito: false,
    genero: {
      id: "romance",
      value: "Romance",
      livros: [],
    },
},
];
