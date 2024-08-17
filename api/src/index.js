import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Api(){
  const[user,setusers]=useState([]);
  const[loading,setloading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(data=>{
    setusers(data);
    setloading(false);
  })
  .catch(error=>{
      console.error("if it is not loading will be error message");
      setloading(false);
    });
  },[]);
  if(loading){
    return<p>Loading</p>;
  }
  return(
    <div class='list'>
      <h1>List out the user in API</h1>
      <ul>
        {user.map((user)=>{
          return(
            <li key={user.id}>{user.name}</li>
            );
            })}
            </ul>
    </div>
  );
}
ReactDOM.render(<Api/>,document.getElementById('root'));