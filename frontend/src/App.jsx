import { useState,useEffect } from "react";
import axios from 'axios';

function App(){
  const [message,setMessage] = useState('');

  // useEffect(()=>{
  //   // axios.get('/hello')
  //   axios.get('/hello')  // inside Docker
  //   .then(res=> setMessage(res.data.message))
  //   .catch(err=>setMessage("Error while fetching message"));
  // },[])

  useEffect(() => {
    fetch("http://backend:5000/hello", { cache: "no-store" } )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("Error while fetching message", err);
      });
  }, []);

  return(
    <div>
      <h1>Frontend React App</h1>
      <p>{ message } </p>
    </div>
  )
}

export default App;