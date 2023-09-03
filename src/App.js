import {useState,useEffect} from 'react'
import Router from './components/router/Router';
import Navbar from './components/router/Navbar/Navbar';
import Product from './components/Product';
const App = () => {
  return <>
  <Navbar/>
  <Router/>
  <Product/>
  </>
}
export default App;