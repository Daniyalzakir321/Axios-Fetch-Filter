import React, { useState } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';
import './App.css';
import axios from 'axios';
// const axios = require('axios');


function App() {

  // ======================== AXIOS ===================================

  const [post, setPost] = useState([])
  // Make a request for a user with a given ID
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPost(res.data)
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })

  // ======================== FETCH ===================================

  const [data, setData] = useState([])

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      setData(json)
      console.log(json)
    })


  // ======================== SEARCH ===================================

  const [search, setSearch] = useState("")
  const filterSearch = post.filter((f) => {
      return f.title.toLowerCase().includes(search.toLowerCase())
  })




  return (
    <div>
      <a href="https://www.npmjs.com/package/axios"> <h1 style={{ textAlign: 'center' }}>AXIOS</h1></a>
      
      <div style={{ textAlign: 'center'}}>
        <TextField label="Search" value={search} onChange={e => { setSearch(e.target.value) }} style={{ width:400 }}/>
        <SearchOutlinedIcon/>
      </div>

      <ul>
        {
          // post.map((d) => (        [FOR NORMAL RETRIEVE]

          filterSearch.map((d) => (
            <li key={d.id}> {d.title} </li>
          ))
        }
      </ul>

      {/* ================================================================== */}

      <hr />
      <a href="https://jsonplaceholder.typicode.com/"> <h1 style={{ textAlign: 'center' }}>FETCH</h1></a>
      <ul>
        {
          data.map((a) => (
            <li key={a.id}> {a.title} </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
