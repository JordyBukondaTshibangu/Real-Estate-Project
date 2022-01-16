import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';
import GlobalStyle from './GlobalStyle';
import Hero from './components/Hero';
import { SliderDataOne } from './data/sliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoDataOne, InfoDataTwo, InfoDataThree } from './data/InfoData';
import LatestSection from './components/LatestSection';
import { LatestHomedata } from './data/latestHomeData';


const App = () => {

  const [isOpen, setIsOpen ] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
      <>
        <GlobalStyle />
        <NavBar toggle={handleToggle}/>
        <Dropdown isOpen={isOpen} toggle={handleToggle}/>
        <Hero slides={SliderDataOne} />
        <InfoSection {...InfoDataOne}/>
        {/* <InfoSection {...InfoDataTwo}/>
        <InfoSection {...InfoDataThree}/> */}
        <LatestSection latestHome={LatestHomedata}/>
      </>

  );
}

export default App;
