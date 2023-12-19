
import React, { useState } from "react";
import './../styles/App.css';
import { error } from "cypress/types/jquery";

const App = () => {


  const [data , setData] = useState(null);
  try {
    
    fetchData('https://dummyjson.com/products')
    .then(response=>response.json())
    .then(response=>setData(response.data))
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data fetched from API</h1>
        <p>{data}</p>
    </div>
  )
}

export default App
