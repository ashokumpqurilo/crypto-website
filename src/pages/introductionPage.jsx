import React from 'react'
import ApiSidebar from '../components/ApiReference/api-sidebar'
import ApiCommonSidebar from '../components/Layout/Api-Common-Sidebar'
import ApiIntroduction from '../components/ApiReference/Api-Introduction'

const Introduction = () => {
  return (
    <>
    <ApiCommonSidebar>
      <ApiIntroduction />
    </ApiCommonSidebar>
    </>
  )
}

export default Introduction