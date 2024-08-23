import logo from './logo.svg';
import './App.css';
import Error from './Error';
//import { GiphyFetch } from '@giphy/js-fetch-api'
import axios from 'axios';
import { useState } from 'react';
import TextList from './TextList';

//const giphy = new GiphyFetch('01ZSuBjlf6GTN2e08XJf3b5pZvLSNCm0')

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);
 
  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    if(searchTerm.length === 0){
      console('length is 0, please insert text before submiting')
      setErr(true);
      return
    }

    const API_KEY = '01ZSuBjlf6GTN2e08XJf3b5pZvLSNCm0'; // Replace with your Giphy API Key
    const apiCall = async () => {
      
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: API_KEY,
                q: searchTerm,
                limit: 10
            }
        });
      //  setGifs(response.data.data);
        setResults(response.data.data)
    } catch (error) {
        console.error('Error fetching the Giphy API', error);
    }

    //  const res = await giphy.animate(text, {limit: 20})
    //  console.log(res)
     
    }

    apiCall()
    setSearchTerm("")
    setErr(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate Animation Text GIFS</h1>
      </header>
        <h3>Type text into the form and hit submit</h3>
        <input className='input-field' id="gifs" name="gifs" value={searchTerm} onChange={handleInput}/>
        <button onClick={handleSubmit} className='submit-btn'>submit</button>
      <TextList gifs={results} />

      
    </div>
  );
}

export default App;
