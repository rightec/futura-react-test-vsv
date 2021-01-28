import React, { useState, useEffect,useRef } from "react";

const CI_CATEG_URL = 'https://api.chucknorris.io/jokes/categories';
const CI_JOKEBYCAT_URL = 'https://api.chucknorris.io/jokes/search?query='



export default function RandomJoke({ more, loadMore, getFirst }) {
  const [joke, setJoke] = useState("");
  const [searchbox,setSearchbox] = useState("");
  const [urltofetch, setUrltofetch] = useState(CI_CATEG_URL);
  const componentIsMounted = useRef(true);
  const [clicked,setClicked] = useState(false);
  const [privaterr,setPrivaterr] = useState(false);
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

  const parseAnswer = (jsondata) => {
    console.log(jsondata);
    if (jsondata.total === undefined){
        console.log ("UNDEFINED");
    } else {
        let datalenght = jsondata.total;
        
        if (datalenght != 0){
            console.log(jsondata.total);
            // Take the first
            if (jsondata !== null){
                let firstquote = jsondata.result[0].value;
                console.log(firstquote);
                getFirst(firstquote);
            } //
        } else {
            console.log("NO DATA AVAILABLE");
        }
    }
  }

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []); 

  useEffect(() => {
    async function fetchJoke() {
        if (clicked == true) {
            {loadMore(true)}
            try {
                let response = await fetch(urltofetch);
                // const { value } = asyncResponse.data;
                jsonAnswer  = await response.json();
                setPrivaterr(false);
                if (componentIsMounted.current) {
                // setJoke(value.joke);
                } // 
            } catch (err) {
                // console.log ("Error ");
                // console.error(err);
                setPrivaterr(true);
            } finally {
                console.log("Joke Finally fetched");
                if (privaterr === false){
                    parseAnswer(jsonAnswer);
                    setClicked(false);
                    {loadMore(false)}
                } //
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