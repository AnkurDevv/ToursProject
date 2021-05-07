import React from 'react';
import Tour from './Tour';
const Tours = () => {
  return(
  <section>
  <div className="title">
  <h2>Our Tours</h2>
  <div className="underline"></div>
  </div>
  <div>
    {tours.map((tour) =>{
      // {...tour} give access to all prop in tour object
      return <Tour key={tour.id} {...tour}/>
    }
    )}
  </div>
  </section>
  );
};

export default Tours;
