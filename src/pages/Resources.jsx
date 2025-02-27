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
  const data = {
    topLinks: [
      { to: "/python-sdk/", label: "Introduction" },
      { to: "/python-sdk/authentication", label: "Authentication" },
      { to: "/python-sdk/pagination", label: "Pagination" },
    ],
    resources: {
      agentBuilderJobs: {
        label: "Agent Builder Jobs",
        items: [
          { to: "/resources/agentBuilderJob", label: "The AgentBuilderJob object" },
          { to: "/resources/listallagent", label: "List all agent builder jobs" },
          { to: "/resources/retrieveanagent", label: "Retrieve an agent builder job" },
        ],
      },
      agentExecutorCronJobs: {
        label: "Agent Executor Cron Jobs",
        items: [
          { to: "/resources/listallagentexecutor", label: "List all agent executor cron jobs" },
          { to: "/resources/agentexecutorcronjob", label: "The AgentExecutorCronJob object" },
          { to: "/resources/retrievexecutorcronjob", label: "Retrieve an agent executor cron job" },
          { to: "/resources/deleteanagent", label: "Delete an agent executor cron job" },
          { to: "/resources/updateanagent", label: "Update an agent executor cron job" },
          { to: "/resources/createanagent", label: "Create an agent executor cron job" },
          { to: "/resources/streamanagent", label: "Stream an agent executor cron job" },
        ],
      },
      agentExecutorJobs: {
        label: "Agent Executor Jobs",
        items: [
          { to: "/resources/agentexecutor", label: "The AgentExecutorJob object" },
          { to: "/resources/listallexecutor", label: "List all agent executor jobs" },
          { to: "/resources/retrieveagents", label: "Retrieve an agent executor job" },
          { to: "/resources/createagents", label: "Create an agent executor job" },
        ],
      },
      agents: {
        label: "Agents",
        items: [
          { to: "/resources/theagentobject", label: "The Agent object" },
          { to: "/resources/listallagents", label: "List all agents" },
          { to: "/resources/retrieveagents", label: "Retrieve an agent" },
          { to: "/resources/deleteagent", label: "Delete an agent" },
          { to: "/resources/updateagent", label: "Update an agent" },
          { to: "/resources/createagent", label: "Create an agent" },
          { to: "/resources/executeagent", label: "Execute an agent" },
        ],
      },
      builds: {
        label: "Builds",
        items: [
          { to: "/resources/thebuildobject", label: "The Build object" },
          { to: "/resources/listallbuilds", label: "List all builds" },
          { to: "/resources/retrieveabuild", label: "Retrieve a build" },
        ],
      },
      executions: {
        label: "Executions",
        items: [
          { to: "/resources/theexecutionobject", label: "The Execution object" },
          { to: "/resources/listexecutions", label: "List all executions" },
          { to: "/resources/retrieveexecution", label: "Retrieve an execution" },
        ],
      },
      stores: {
        label: "Stores",
        items: [
          { to: "/resources/thestoreobject", label: "The Store object" },
          { to: "/resources/createastore", label: "Create a store" },
          { to: "/resources/deleteastore", label: "Delete a store" },
          { to: "/resources/updatestore", label: "Update a store" },
          { to: "/resources/retrievestore", label: "Retrieve a store" },
          { to: "/resources/liststores", label: "List all stores" },
          
        ],
      },
      
    },
  };
  
  return (
    <div className="w-full overflow-x-hidden">
      <Header/>
        <div className=" flex " style={{maxWidth: "100vw" , overflowX: "hidden"}}>
        <LeftSidebar data={data}/>
        <main className="flex w-full  lg:max-w-[calc(100vw-300px)] overflow-x-hidden">
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