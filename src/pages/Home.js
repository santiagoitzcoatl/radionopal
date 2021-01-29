import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageTitle from '../components/PageTitle/PageTitle';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <PageTitle
        title="Programación"
        subtitle="Agosto-Septiembre"
        description="Quisque sodales nunc id justo eleifend ullamcorper. Maecenas malesuada feugiat neque, sit amet eleifend mauris consequat nec"
      />
      <Footer />
    </div>
  );
};

export default Home;
