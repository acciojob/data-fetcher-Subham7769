
import React, { useEffect, useState } from "react";
import './../styles/App.css';


const App = () => {


  const [data , setData] = useState([]);

  function fetchData(){
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(response => {
        setData(response.products);
      })
      .catch(error => console.log(error));
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        {
               data &&  <pre>{JSON.stringify(data,null,2)}</pre> ||
                  <pre>An error occurred: </pre>
        }
    </div>
  )
}

export default App
