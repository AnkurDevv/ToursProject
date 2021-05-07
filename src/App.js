import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]); // tours default val is an empty array 

  const fetchTours = async () => {
    // setLoading(true);
    // try and catch block for the network errors
    try {
      const response = await fetch(url);
      const  tours = await response.json();
      setTours(tours);
      console.log(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  console.log(tours);

  // useEffect to use FetchTours once the component renders
  useEffect(() =>{
    fetchTours();
  },[]);

  if(loading){
    return(
      <main>
        <Loading/> 
      </main>
    );
  }
  return <main>
    <Tours/>
  </main>
}

export default App
