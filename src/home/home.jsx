import React from 'react'
import Header from './Header'
import TopBanner from './topBanner'
import Features from './features'
import SwarmNodeBounties from './bountyCard'
import Documentation from './Documentation'
import PricingCards from './pricing'
import SwarmNodeBanner from './SwarmNodeBanner'
import Footer from './Footer'
import Templates from './Newtemplates'
import AIServiceCard from './AIServiceCard'

const Home = () => {
  return (
   <>
     <Header/>
     <TopBanner />
     <Features />
     <SwarmNodeBounties />
     <Templates />
     <AIServiceCard />
     <Documentation />
     <PricingCards />
     <SwarmNodeBanner/>
     <Footer/>
   </>
  )
}

export default Home