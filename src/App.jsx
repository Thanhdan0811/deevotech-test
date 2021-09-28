import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CocktailList from './components/CocktailList.jsx';
import { useState } from 'react';

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [title, setTitle] = useState("Search above and find your favorite");
  return (
    <>
      <Header setTitle={setTitle} setCocktailList={setCocktailList}/>
      <CocktailList title={title} cocktailList={cocktailList}/>
    </>
  );
}

export default App;
