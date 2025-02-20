import React from 'react'
import { useLocation } from 'react-router-dom'

import AgentBuilderJob from '../pythonsdk/resource/AgentBuilderJob/AgentBuilderJob'
import ListAllAgent from '../pythonsdk/resource/ListAllAgent/ListAllAgent'
import RetrieveAnAgent from '../pythonsdk/resource/RetrieveAnAgent/RetrieveAnAgent'
import Createagents from '../pythonsdk/resource/AgentExecutorCronJobs/Createagents'
import Deleteanagent from '../pythonsdk/resource/AgentExecutorCronJobs/Deleteanagent'
import ListAllAgentExecutor from '../pythonsdk/resource/AgentExecutorCronJobs/Listallagentexecutor'
import Streamanagent from '../pythonsdk/resource/AgentExecutorCronJobs/Streamanagent'
import Updateanagent from '../pythonsdk/resource/AgentExecutorCronJobs/Updateanagent'
import AgentexecutorcronJob from '../pythonsdk/resource/AgentExecutorCronJobs/AgentexecutorcronJob'
import Retrieveagentexecutor from '../pythonsdk/resource/AgentExecutorCronJobs/Retrieveagentexecutor '
import AgentExecutorJob from '../pythonsdk/resource/AgentExecutorJobs/AgentExecutorJob'
import Listallexecutor from '../pythonsdk/resource/AgentExecutorJobs/Listallexecutor'
import Createagentexecutors from '../pythonsdk/resource/AgentExecutorJobs/Createagents'
import Retrieveagents from '../pythonsdk/resource/AgentExecutorJobs/Retrieveagents'
import Createanagent from '../pythonsdk/resource/Agents/Createanagent'
import Theagentobject from '../pythonsdk/resource/Agents/Theagentobject'
import Listallagents from '../pythonsdk/resource/Agents/Listallagents'
import AgentRetrieveanagent from '../pythonsdk/resource/Agents/Retrieveanagent'
import Thebuildobject from '../pythonsdk/resource/Builds/Thebuildobject'
import Listallbuilds from '../pythonsdk/resource/Builds/Listallbuilds'
import Retrieveabuild from '../pythonsdk/resource/Builds/Retrieveabuild'
import ListExecutions from '../pythonsdk/resource/Executions/ListExecutions'
import RetrieveExecution from '../pythonsdk/resource/Executions/RetrieveExecution'
import TheExecutionObject from '../pythonsdk/resource/Executions/TheExecutionObject'
import RetrieveStore from '../pythonsdk/resource/Stores/RetrieveStore'
import UpdateStore from '../pythonsdk/resource/Stores/UpdateStore'
import DeleteStore from '../pythonsdk/resource/Stores/DeleteStore'
import Thestoreobject from '../pythonsdk/resource/Stores/Thestoreobject'
import ListStores from '../pythonsdk/resource/Stores/ListStores'
import AgentExecutorCronJobs from './AgentExecutorCronJobs'
import LeftSidebar from '../components/Layout/Python/LeftSidebar'
import Header from '../components/Layout/Header'

const Resources = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="w-full overflow-x-hidden">
      <Header/>
        <div className=" flex " style={{maxWidth: "100vw" , overflowX: "hidden"}}>
        <LeftSidebar />
        <main className="flex max-w-[calc(100vw-300px)] overflow-x-hidden">
        {(path === '/resources/agentBuilderJob' || path === '/resources/agentBuilderJob/') && <AgentBuilderJob />}
          {(path === '/resources/listallagent' || path === '/resources/listallagent/') && <ListAllAgent />}
          {(path === '/resources/retrieveanagent' || path === '/resources/retrieveanagent/') && <RetrieveAnAgent />}
          {(path === '/resources/createagents' || path === '/resources/createagents/') && <Createagents />}
          {(path === '/resources/deleteanagent' || path === '/resources/deleteanagent/') && <Deleteanagent />}
          {(path === '/resources/listallagentexecutor' || path === '/resources/listallagentexecutor/') && <ListAllAgentExecutor />}
          {(path === '/resources/retrieveagentexecutor' || path === '/resources/retrieveagentexecutor/') && <Retrieveagentexecutor />}
          {(path === '/resources/streamanagent' || path === '/resources/streamanagent/') && <Streamanagent />}
          {(path === '/resources/updateanagent' || path === '/resources/updateanagent/') && <Updateanagent />}
          {(path === '/resources/agentexecutorcronJob' || path === '/resources/agentexecutorcronJob/') && <AgentexecutorcronJob />}
          {(path === '/resources/agentexecutor' || path === '/resources/agentexecutor/') && <AgentExecutorJob />}
          {(path === '/resources/listallexecutor' || path === '/resources/listallexecutor/') && <Listallexecutor />}
          {(path === '/resources/createagentexecutors' || path === '/resources/createagentexecutors/') && <Createagentexecutors />}
          {(path === '/resources/retrieveagents' || path === '/resources/retrieveagents/') && <Retrieveagents />}
          {(path === '/resources/createagents' || path === '/resources/createagents/') && <Createagents />}
          {(path === '/resources/theagentobject' || path === '/resources/theagentobject/') && <Theagentobject />}
          {(path === '/resources/deleteagent' || path === '/resources/deleteagent/') && <Deleteanagent />}
          {(path === '/resources/updateagent' || path === '/resources/updateagent/') && <Updateanagent />}
          {(path === '/resources/createagent' || path === '/resources/createagent/') && <Createanagent />}
          {(path === '/resources/listallagents' || path === '/resources/listallagents/') && <Listallagents />}
          {(path === '/resources/agent-retrieveanagent' || path === '/resources/agent-retrieveanagent/') && <AgentRetrieveanagent />}
          {(path === '/resources/listallbuilds' || path === '/resources/listallbuilds/') && <Listallbuilds />}
          {(path === '/resources/retrieveabuild' || path === '/resources/retrieveabuild/') && <Retrieveabuild />}
          {(path === '/resources/thebuildobject' || path === '/resources/thebuildobject/') && <Thebuildobject />}
          {(path === '/resources/listexecutions' || path === '/resources/listexecutions/') && <ListExecutions />}
          {(path === '/resources/retrieveexecution' || path === '/resources/retrieveexecution/') && <RetrieveExecution />}
          {(path === '/resources/theexecutionobject' || path === '/resources/theexecutionobject/') && <TheExecutionObject />}
          {(path === '/resources/listallagentexecutor' || path === '/resources/listallagentexecutor/') && <ListAllAgentExecutor />}
          {(path === '/resources/listallstores' || path === '/resources/listallstores/') && <ListAllAgent />}
          {(path === '/resources/createastore' || path === '/resources/createastore/') && <CreateStore />}
          {(path === '/resources/deleteastore' || path === '/resources/deleteastore/') && <DeleteStore />}
          {(path === '/resources/updatestore' || path === '/resources/updatestore/') && <UpdateStore />}
          {(path === '/resources/retrievestore' || path === '/resources/retrievestore/') && <RetrieveStore />}
          {(path === '/resources/thestoreobject' || path === '/resources/thestoreobject/') && <Thestoreobject />}
          {(path === '/resources/liststores' || path === '/resources/liststores/') && <ListStores />}
          {(path === '/resources/agent-cxecutor-cron-jobs' || path === '/resources/agent-cxecutor-cron-jobs/') && <AgentExecutorCronJobs />}

        </main>
      
      </div>
    </div>
  )
}

export default Resources