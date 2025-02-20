import React from 'react'
import GettingStartedSidebar from '../components/Layout/GettingStartedSidebar'
import CreateStore from '../components/getStart/DataStorage/CreateStore'
import AccessStore from '../components/getStart/DataStorage/AccessStore'
import SupportedTypes from '../components/getStart/DataStorage/SupportedTypes'
import Transactions from '../components/getStart/DataStorage/Transactions'
import Locking from '../components/getStart/DataStorage/Locking'
import UseStore from '../components/getStart/DataStorage/UseStore'
import Intro from '../components/getStart/DataStorage/Intro'
import GettingStartedRightSidebar from '../components/Layout/GettingStartedRightSidebar'
import Headerdocument from '../common/Headerdocument'
const DataStorage = () => {
  return (
    <>
    <Headerdocument />
    <div className="w-full flex h-full">
      <GettingStartedSidebar />
      <main className="flex-1 ml-64 mr-64">
        <Intro />
        <CreateStore />
        <AccessStore />
        <UseStore />
        <SupportedTypes />
        <Transactions />
        <Locking />
      </main>
      <GettingStartedRightSidebar />
    </div>
    </>
  )
}

export default DataStorage