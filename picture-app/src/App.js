import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PictureGallery from './components/PictureGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PictureGallery />
      <Footer />
    </div>
  );
}

export default App;
