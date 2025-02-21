import React from 'react'
import { useLocation } from 'react-router-dom';
import CreateAgent from '../components/Marketplace/CreataAgent';
import AllMarketePlace from '../components/Marketplace/AllMarketePlace';
import MyVectorStore from '../components/Marketplace/MyVectorStore';
import VectorStore from '../components/Marketplace/vectorStore';
import CreateStore from '../components/Marketplace/createStore';
import Agents from '../components/Marketplace/agents';

const MarketPlace = () => {
    const location = useLocation();
  const path = location.pathname;

  return (
<div>
        {(path === '/market-place' || path === '/market-place/') && <Agents />}
        {(path === '/market-place/create-store' || path === '/market-place/create-store/') && <CreateStore />}
        {(path === '/market-place/create-vector-store' || path === '/market-place/create-vector-store/') && <VectorStore />}
        {(path === '/market-place/vector-store' || path === '/market-place/vector-store/') && <MyVectorStore />}
        {(path === '/market-place/market-place' || path === '/market-place/market-place/') && <AllMarketePlace />}

    </div>
  )
}

export default MarketPlace