import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
     // Declaração álbum 1:
  const album01 = {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
    title: 'Mylo Xyloto',
    releaseDate: {
      year: '2011',
      month: '10',
      day: '24',
    },
    others: {
      recordCompany: 'Capitol, Parlophone',
      formats: 'CD, digital',
    },
  };

  //Declaração album 2:
  const album02 = {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
    title: 'Ghost Stories',
    releaseDate: {
      year: '2014',
      month: '05',
      day: '16',
    },
    others: {
      recordCompany: 'Parlophone',
      formats: 'CD, digital',
    },
  };
//Retorno da renderização article, section, img, h2, p, p, p sectio...
  return (
    <article>
      <section>
        <img src={album01.image} alt={album01.title} />
        <h2>{album01.title}</h2>
        <p>Lançamento: {album01.releaseDate.year}</p>
        <p>Gravadora: {album01.others.recordCompany}</p>
        <p>Formato: {album01.others.formats}</p>
      </section>
      <section>
        <img src={album02.image} alt={album02.title} />
        <h2>{album02.title}</h2>
        <p>Lançamento: {album02.releaseDate.year} </p>
        <p>Gravadora: {album02.others.recordCompany} </p>
        <p>Formato: {album02.others.formats}</p>
      </section>
    </article>
  );
  }
}
export default App;
