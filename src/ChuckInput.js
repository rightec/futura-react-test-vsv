import React, { useState, useEffect,useRef } from "react";

const CI_CATEG_URL = 'https://api.chucknorris.io/jokes/categories';
const CI_JOKEBYCAT_URL = 'https://api.chucknorris.io/jokes/search?query='



export default function RandomJoke({ more, loadMore }) {
  const [joke, setJoke] = useState("");
  const [searchbox,setSearchbox] = useState("");
  const [urltofetch, setUrltofetch] = useState(CI_CATEG_URL);
  const componentIsMounted = useRef(true);
  const [clicked,setClicked] = useState(false);
  let jsonAnswer = 0;
  const onChange = (event) => {
    setSearchbox(event.target.value);
    console.log("SEARCHBOX - Text in searchbox is:", event.target.value);
  }

  const onClickSButton = () => {
    let key = CI_JOKEBYCAT_URL + searchbox;
    console.log("Search Button clicked: ", key);
    setUrltofetch(key);
    setClicked(true);
  }

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []); 

  useEffect(() => {
    async function fetchJoke() {
        if (clicked == true) {
            try {
                let response = await fetch(urltofetch);
                // const { value } = asyncResponse.data;
                jsonAnswer  = await response.json();

                if (componentIsMounted.current) {
                // setJoke(value.joke);
                } // 
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Joke fetched");
                console.log(jsonAnswer);
                setClicked(false);
            } // end finally
        } else {
            console.log("fetchJoke called but not executed");
        }
    }

    fetchJoke();
  }, [more, clicked]);

  return (
    <div>
      <input
            type="search"
            id="search" name="search"
            placeholder="Enter keyword here"
            value={searchbox}
            onChange={onChange}
        />
        <button
            className="Search-Button"
            onClick= {onClickSButton} 
          >
            <code>CLICK TO SEARCH!</code>
          </button>
    </div>
  );
}