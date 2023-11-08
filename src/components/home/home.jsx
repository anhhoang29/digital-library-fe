// Home.js
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Banner from '../banner/banner';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Banner/>
      <Footer />
    </div>
  );
}

export default Home;
