import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {fetchDataFromApi} from "./utils/api";
import { getApiConfiguration } from './store/homeSlice';


function App() {
  const dispatch = useDispatch();
// const url = useSelector(state => state.home.url); // or
const {url} = useSelector(state => state.home);

console.log("url : ", url);

  useEffect(() =>{
    apiTesting();
  },[])

const apiTesting =() =>{
  fetchDataFromApi("/movie/popular")
  .then((res) =>{
    console.log(res);
    dispatch(getApiConfiguration(res));
  })
}
  return (
<div className="app">
{url?.total_pages}
</div>
  )
}

export default App
