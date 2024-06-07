import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollection from '../components/newcollection/NewCollection';
import NewsLetter from '../components/newsletter/NewsLetter';
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers></Offers>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
    </div>
  )
}
export default Shop;