import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category'
import Category2 from './components/Category2'
import Services from './components/Services'
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Partners from "./components/Partners/Partners"
import Footer from './components/Footer/Footer'



const App = () => {

  return (

    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero  />
      <Category/>
      <Category2/>
      <Services/>
      <Products/>
      <Blogs/>
    <Partners/>
    <Footer/>
      
      
    </div>
  )
}

export default App