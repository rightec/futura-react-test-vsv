import React, { useState, useEffect,useRef } from 'react'
import logo from './logo.svg';
import './App.css';
import RandomJoke from './ChuckInput.js'
import { UserApiRun } from './UserContext'
import CatHide from './CatHide.js'

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
  return (
   <button className="Cat-button" onClick={onClick}>
     <code>{title}</code>
   </button>
  )
}


const CategoriesList = ({ categories, onCategoryClick }) => {
  return (  
    (categories !== null) ?  
    categories.map(product => <CategoryButton title={product} onClick={onCategoryClick}/>) : (<></>)       
  )    
  // per ciascun elemento di 'categories' renderizzare il componente <CategoryButton />
}

const Joke = ({ value, categories }) => {
  return (
    <div className="Joke">
      <code className="Joke-Value">{value}</code>
      <span className={`Dont-View-Cat${categories === "" ? "Selected-Cat" : "" }`} >
         <code >{categories}</code>
       </span>
      </div>
  )
}

function App() {
  // qui tutto ciò che serve al componente per essere inizializzato
  const [isloading, setIsloading] = useState(false); // to be used for spinning the logo
  const [first,setFirst] = useState("");  // to be use with first quote
  const [category,setCategory] = useState("");
  const [categories,setCategories] = useState([]);
  const [selectedcat,setSelectedcat] = useState("prova");
  const onloading = (isloading) => {
    console.log("is loading: ", isloading);
    setIsloading(isloading);
  }

  // getAllCategories
  // funzione che deve recuperare l'array di tutte le categorie esistenti e salvarlo
  const getCategories = (areCategories) => {
    console.log("Get the categories: ", areCategories);
    setCategories(areCategories);
  }

  const getFirst = (isFirst) => {
    console.log("Get the first: ", isFirst);
    setFirst(isFirst);
    if (isFirst !== ""){
      setCategory("void");
    }
  }

  const getSingleCategory = (Event) =>{
    console.log ("getSingleCat event", Event.target.innerText);
    setSelectedcat(Event.target.innerText);
  }

  

  // onCategoryClick
  // funzione richiamata al click del componente CategoryButton

  // getRandomJokeByCat
  // funzione che recupera una singola barzelletta e la salva

  // getJokeByKeyword
  // funzione che recupera le barzellette contenenti la parola chiave
  // digitata nel campo di testo

  // onInputTextChange
  // handler per l'input di testo

  // qui USEFFECTS

  useEffect(() => {
    return () => {
      console.log("categories Array changed");
    };
  }, [categories]); 

    return (
      <div className="App">
        <div className="App-header">
            <Logo loading = {isloading}
              // ...
            />
            <RandomJoke loadMore = {onloading}
            getFirst = {getFirst}
            errFunction = {launchErrorAlert}
            getCategory= {getCategories}
            />
          <code>or: </code>
          <CategoriesList
            categories = {categories}
            onCategoryClick = {getSingleCategory}
          />
        </div>
        <div className="Content">
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" 
            className="Chuck-Logo"
            alt="chuck-logo"
          />
          <code>
            {category !== "void" ? (<CatHide prop={selectedcat}/>) : (<></>)}
          </code>
          <button
            className="Random-Button"
            // ...
          >
            <h2>GET RANDOM JOKE FOR SELECTED CATEGORY</h2>
          </button>
          {/* <Joke ... /> */}
          <Joke value = {first} />
        </div>
        <div className="footer">
        <code>Esame di React per cfp-futura. Grazie ad <a href="https://api.chucknorris.io">api.chucknorris.io</a> per l'immagine e le api. Docente: Vito Vitale. Studente: Fernando Morani </code>
        </div>
      </div>
    );
  // }
};

export default App;
