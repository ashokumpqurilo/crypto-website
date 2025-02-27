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
   <div className='bg-cover' style={{backgroundImage: "url(/images/bg.png)", height:'max-content'}}>
     <Header/>
     <TopBanner />
     <Features />
     {/* <SwarmNodeBounties /> */}
     <Templates />
     <AIServiceCard />
     <Documentation />
     <PricingCards />
     <SwarmNodeBanner/>
     <Footer/>
   </div>
  )
}

export default Home