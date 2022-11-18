import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Logo from './compannets/logo';
import Header from './compannets/header';
import Title from './compannets/title';
import Groups from './compannets/goups';
import Matches from './compannets/matches';

function App() {
  const token = "7952972e210341e5b51d51dde78eb06a";
  let baseUrl = "https://api.football-data.org/v4"

  const [standings,setstandings] = useState([])
  const [matches,setmatches] = useState([])

  function getStandings()
  {
      const url = `${baseUrl}/competitions/2000/standings`
      axios.get(url, {
          headers: {
            "X-Auth-Token": `${token}`,
          }
        
      })
      .then((response) => {
          setstandings( response.data.standings)   
      })
  }

  function getMatches()
  {
      const url = `${baseUrl}/competitions/2000/matches`

      console.log(url, token)
      axios.get(url, {
          headers: {
              "X-Auth-Token": `${token}`,
              'Access-Control-Allow-Origin': '*'
          }
      })
      .then((response) => {
          setmatches( response.data.matches)             
      })
  }

  useEffect(()=>{
    getStandings();
    getMatches();
  },[])

  return (
    <div className="App">
      <Logo/>
      <Header/>
      <Title/>
      <div className="container" style={{"margin-top": "50px"}}>
        <Groups/>
        <Matches/>
      </div>
    </div>
  );
}

export default App;
