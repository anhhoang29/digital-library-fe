// Home.js
import React from 'react';
import Header from '../header/header';

import Footer from '../footer/Footer';

import Banner from '../banner/banner';


const Home = () => {
  return (

    <div className="home w-4xl bg-gray-100">
      <Header />
      <Banner />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default Home;
