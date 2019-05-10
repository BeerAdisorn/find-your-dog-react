import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ButtonDog(props) {
  return (
    <div className="mb-1">
      <button type="button" className="btn btn-outline-success">{props.breed}</button>
    </div>
  );
}
function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
      setDogs(Object.keys(res.data.message))
      console.log(Object.keys(res.data.message))
    })
  },[])
  return (
    <div className="container">
      <h1 className="text-center"> Find-your-dog </h1>
      {dogs.map((dog) => <ButtonDog breed={dog} />)}

    </div>
  );
}

export default App;
