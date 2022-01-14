import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';
import GlobalStyle from './GlobalStyle';
import Hero from './components/Hero';
import { SliderDataOne } from './data/sliderData';


const App = () => {
  return (
      <>
        <GlobalStyle />
        <NavBar />
        <Hero slides={SliderDataOne} />
      </>

  );
}

export default App;
