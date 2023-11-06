// Home.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import banner from './banner';

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
