import React,  {useEffect} from 'react'
import './App.css';
//import axios from 'axios'


function App() {
 
 
  useEffect(()=>{
    const fetchMovie =async()=>{
      const url="https://www.omdbapi.com/?apikey=3cc4b5c9&s=harry+potter,"
      const response=await fetch(url)
      const finaldata= await response.json()
      console.log(finaldata);
      let data=finaldata;
      
      

    }
    fetchMovie()
    

 },[])

  

  return (
    <div>
    <h1>Movies App</h1>
    <hr></hr>
    <input type="search" class="search1" placeholder='search...'  /><br/><br></br>
    <button type="submit">search Now</button>
    
    
    </div>
  );
}

export default App;
