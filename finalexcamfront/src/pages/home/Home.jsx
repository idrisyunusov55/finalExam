import React from 'react'
import Events from '../../components/events/Events'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Our from '../../components/our/Our'
import ProductSec from '../../components/productSec/ProductSec'
import Team from '../../components/team/Team'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Our/>
        <ProductSec/>
        <Events/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home