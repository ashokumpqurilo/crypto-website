import { useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Login from './home/Login'
import Register from './home/register'
import Introduction from './pages/introductionPage'
import ApiAuthentication from './components/ApiReference/Api-Authentication'
import ApiIntroduction from './components/ApiReference/Api-Introduction'
import Listallagentbuilderjobs from './components/ApiReference/Resources/AgentBuilderJobs/List-all-agent-builder-jobs'
import GettingStarted from './pages/GettingStarted'
import DataStorage from './pages/DataStorage'
import Agents from './components/Marketplace/agents'
import CreateAgent from './components/Marketplace/CreataAgent'
import 'react-tooltip/dist/react-tooltip.css'
import CreateStore from './components/Marketplace/createStore'
import MyStore from './components/Marketplace/myStore'
import VectorStore from './components/Marketplace/vectorStore'
import MyVectorStore from './components/Marketplace/MyVectorStore'
import AllMarketePlace from './components/Marketplace/allMarketPlace'
import TemplateView from './components/Marketplace/templateView'
import PythonPage from './Pages/PythonPage'

function App() {
 
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/register'  element={<Register />} />
        <Route path='/introduction' element={<ApiIntroduction />} />
        <Route path='/authentication' element={<ApiAuthentication />} />
        <Route path='/list-all-agent-builder-jobs' element={<Listallagentbuilderjobs />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/data-storage" element={<DataStorage />} />
        <Route path="/marketplace" element={<CreateAgent />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/createStore" element={<CreateStore />} />
        <Route path="/store" element={<MyStore />} />
        <Route path="/createVectorStore" element={<VectorStore />} />
        <Route path="/vectorstore" element={<MyVectorStore />} />
        <Route path="/marketePlace" element={<AllMarketePlace />} />
        <Route path="/template" element={<TemplateView />} />
        <Route path="/python-sdk/*" element={<PythonPage />} />


      </Routes>
    </Router>
    </>
  )
}

export default App
