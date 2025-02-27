import { useEffect, useState } from 'react'

import './index.css'
import { BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom'
import Home from './home/home'
import Login from './home/Login'
import Register from './home/register'
import ApiAuthentication from './components/ApiReference/Api-Authentication'
import ApiIntroduction from './components/ApiReference/Api-Introduction'
import Listallagentbuilderjobs from './components/ApiReference/Resources/AgentBuilderJobs/List-all-agent-builder-jobs'
import GettingStarted from './pages/GettingStarted'
import DataStorage from './pages/DataStorage'
import 'react-tooltip/dist/react-tooltip.css'

import TemplateView from './components/Marketplace/templateView'
import PythonPage from './Pages/PythonPage'
import Resources from './pages/Resources'
import MarketPlace from './pages/marketPlace'
import ApiReference from './pages/ApiReference'
import ProtectedRoute from './auth/ProtectedRoute'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
function App() {
 

  return (
    <>
    <Router>
    <ScrollToTop />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/register'  element={<Register />} />
        <Route path='/introduction' element={<ApiIntroduction />} />
        <Route path='/authentication' element={<ApiAuthentication />} />
        <Route path='/list-all-agent-builder-jobs' element={<Listallagentbuilderjobs />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/data-storage" element={<DataStorage />} />
        <Route path="/template" element={<TemplateView />} />
        <Route path="/python-sdk/*" element={<PythonPage />} />
        <Route path="/resources/*" element={<Resources />} />
        <Route path="/api-reference/*" element={<ApiReference />} />
        <Route
          path="/market-place/*"
          element={
            <ProtectedRoute>
              <MarketPlace />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
