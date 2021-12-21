import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routing from './Routing';


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routing />
    <Footer />
    </BrowserRouter>
  );
};

export default App;