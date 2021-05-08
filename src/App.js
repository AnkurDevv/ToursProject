import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]); // tours default val is an empty array 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
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
  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={() =>fetchTours()}>Refresh</button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
