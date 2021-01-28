import React, { useState, useEffect,useRef } from 'react'
import logo from './logo.svg';
import './App.css';
import RandomJoke from './ChuckInput.js'
import { UserApiRun } from './UserContext'

const ALLCATEGORIESURL = 'https://api.chucknorris.io/jokes/categories'
const RANDOMJOKEBYCATURL = 'https://api.chucknorris.io/jokes/random?category=' // remember to fill this
const ALLLJOKESBYKEYWORD = 'https://api.chucknorris.io/jokes/search?query=' // remember to fill this
const launchErrorAlert = () => setTimeout(() => window.alert('errore!'), 500) 

// classe 'App-logo-spinning' durante il caricamento, altrimenti classe 'App-logo'
const Logo = ({ loading }) => {
  return (
    <img
      src={logo}
      className={`App-logo${loading ? ' App-logo-spinning' : ''}`}
      alt='interactive-logo' 
    />
  )
}

const CategoryButton = ({ title, onClick }) => {
  return null
  // <button className="Cat-button" ... >
  //   <code>{title}</code>
  // </button>
}


const CategoriesList = ({ categories, onCategoryClick }) => {
  return null
  // per ciascun elemento di 'categories' renderizzare il componente <CategoryButton />
}

const Joke = ({ value, categories }) => {
  return null
  // <div className="Joke">
  //   <code className="Joke-Value">{value}</code>
  //     per ciascun elemento di 'categories', renderizzare:
  //     <span className="Selected-Cat" ... >
  //       <code>{* QUI LA STRINGA DELLA SINGOLA CATEGORIA *}</code>
  //     </span>
  // </div>
}

function App() {
  // qui tutto ciò che serve al componente per essere inizializzato
  const [isloading, setIsloading] = useState(false);

  const onloading = (isloading) => {
    console.log("is loading: ", isloading);
    setIsloading(isloading);
  }

  // getAllCategories
  // funzione che deve recuperare l'array di tutte le categorie esistenti e salvarlo

  // onCategoryClick
  // funzione richiamata al click del componente CategoryButton

  // getRandomJokeByCat
  // funzione che recupera una singola barzelletta e la salva

  // getJokeByKeyword
  // funzione che recupera le barzellette contenenti la parola chiave
  // digitata nel campo di testo

  // onInputTextChange
  // handler per l'input di testo

  // qui i lifecycle methods

    return (
      <div className="App">
        <div className="App-header">
            <Logo loading = {isloading}
              // ...
            />
            <RandomJoke loadMore = {onloading}
            />
          <code>or: </code>
          <CategoriesList
            // ...
          />
        </div>
        <div className="Content">
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" 
            className="Chuck-Logo"
            alt="chuck-logo"
          />
          <code>
            <h2>
              SELECTED CATEGORY:
              <span className="Selected-Cat">
                {/* QUI LA CATEGORIA SELEZIONATA */}
              </span>
            </h2>
          </code>
          <button
            className="Random-Button"
            // ...
          >
            <h2>GET RANDOM JOKE FOR SELECTED CATEGORY</h2>
          </button>
          {/* <Joke ... /> */}
        </div>
        <div className="footer">
        <code>Esame di React per cfp-futura. Grazie ad <a href="https://api.chucknorris.io">api.chucknorris.io</a> per l'immagine e le api. Docente: Vito Vitale. Studente: Fernando Morani </code>
        </div>
      </div>
    );
  // }
};

export default App;
