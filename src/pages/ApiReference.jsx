import React from 'react'
import { useLocation } from 'react-router-dom'
import ListAgentBuilderJobs from '../SubPages/Api-Reference/AgentBuilderJobs/AgentExecutorCronJobs'
import RetrieveAgentBuilderJob from '../SubPages/Api-Reference/AgentBuilderJobs/RetrieveAgentBuilderJob'
import ListAllAgentExecutorCronJobs from '../SubPages/Api-Reference/AgentExecutorCronJobs/ListAllAgentExecutorCronJobs'
import RetrieveAnAgentExecutorCronJob from "../SubPages/Api-Reference/AgentExecutorCronJobs/RetrieveAnAgentExecutorCronJob"
import DeleteAnAgentExecutorCronJob from "../SubPages/Api-Reference/AgentExecutorCronJobs/DeleteAnAgentExecutorCronJob"
import UpdateAnAgentExecutorCronJob from '../SubPages/Api-Reference/AgentExecutorCronJobs/UpdateAnAgentExecutorCronJob'
import CreateAnAgentExecutorCronJob from '../SubPages/Api-Reference/AgentExecutorCronJobs/CreateAnAgentExecutorCronJob'
import ListAllAgentExecutorJobs from '../SubPages/Api-Reference/AgentExecutorJobs/ListAllAgentExecutorJobs'
import ListAllBuilds from '../SubPages/Api-Reference/Builds/ListAllBuilds'
import CreateAnAgentExecutorJob from '../SubPages/Api-Reference/AgentExecutorJobs/CreateAnAgentExecutorJob'
import ListAgents from '../SubPages/Api-Reference/Agents/ListAgents'
import RetrieveExecutorJob from '../SubPages/Api-Reference/AgentExecutorJobs/RetrieveExecutorJob'
import RetriveAgents  from "../SubPages/Api-Reference/Agents/RetriveAgents"
import DeleteAgents from '../SubPages/Api-Reference/Agents/DeleteAgents'
import UpdateAgents from '../SubPages/Api-Reference/Agents/UpdateAgents'
import CreateAgents from '../SubPages/Api-Reference/Agents/CreateAgents'
import ListAllStores from "../SubPages/Api-Reference/Stores/ListAllStores"
import RetrieveAllStores from '../SubPages/Api-Reference/Stores/RetrieveAllStores'
import CreateStore from '../SubPages/Api-Reference/Stores/CreateStore'
import UpdateStore from '../SubPages/Api-Reference/Stores/UpdateStore'
import DeleteStore from '../SubPages/Api-Reference/Stores/DeleteStore'
import ApiReferenceIntroduction from '../SubPages/Api-Reference/ApiReferenceIntroduction'
import ApiReferenceAuthentication from '../SubPages/Api-Reference/ApiReferenceAuthentication'
import LeftSidebar from '../components/Layout/Python/LeftSidebar'
import RetrieveABuild from '../SubPages/Api-Reference/Builds/RetrieveABuild'
import ListAllExecutions from '../SubPages/Api-Reference/Executions/ListAllExecutions'
import RetrieveExecution from '../SubPages/Api-Reference/Executions/RetrieveAnExecution'
import Header from '../components/Layout/Header'

const ApiReference = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigationConfig = {
    topLinks: [
      { to: "/api-reference/introduction", label: "Introduction" },
      { to: "/api-reference/authentication", label: "Authentication" },
    ],
    resources: {
      agentBuilderJobs: {
        label: "Agent Builder Jobs",
        items: [
          { to: "/api-reference/list-all-agent-builder-jobs", label: "List all agent builder jobs" },
          { to: "/api-reference/retrieve-agent-builder-job", label: "Retrieve an agent builder job" },
        ],
      },
      agentExecutorCronJobs: {
        label: "Agent Executor Cron Jobs",
        items: [
          { to: "/api-reference/list-all-executor-cron-jobs", label: "List all agent executor cron jobs" },
          { to: "/api-reference/retrieve-executor-cron-job", label: "Retrieve an agent executor cron job" },
          { to: "/api-reference/delete-executor-cron-job", label: "Delete an agent executor cron job" },
          { to: "/api-reference/update-executor-cron-job", label: "Update an agent executor cron job" },
          { to: "/api-reference/create-executor-cron-job", label: "Create an agent executor cron job" },
        ],
      },
      agentExecutorJobs: {
        label: "Agent Executor Jobs",
        items: [
          { to: "/api-reference/list-executor-jobs", label: "List all agent executor jobs" },
          { to: "/api-reference/retrieve-executor-job", label: "Retrieve an agent executor job" },
          { to: "/api-reference/create-executor-job", label: "Create an agent executor job" },
        ],
      },
      agents: {
        label: "Agents",
        items: [
          { to: "/api-reference/list-agents", label: "List all agents" },
          { to: "/api-reference/retrieve-agent", label: "Retrieve an agent" },
          { to: "/api-reference/delete-agent", label: "Delete an agent" },
          { to: "/api-reference/update-agent", label: "Update an agent" },
          { to: "/api-reference/create-agent", label: "Create an agent" },
        ],
      },
      builds: {
        label: "Builds",
        items: [
          { to: "/api-reference/list-all-builds", label: "List all builds" },
          { to: "/api-reference/retrieve-build", label: "Retrieve a build" },
        ],
      },
      executions: {
        label: "Executions",
        items: [
          { to: "/api-reference/list-all-executions", label: "List all executions" },
          { to: "/api-reference/retrieve-an-execution", label: "Retrieve an execution" },
        ],
      },
      stores: {
        label: "Stores",
        items: [
          { to: "/api-reference/list-all-store", label: "List all stores" },
          { to: "/api-reference/retrieve-store", label: "Retrieve a store" },
          { to: "/api-reference/delete-store", label: "Delete a store" },
          { to: "/api-reference/update-store", label: "Update a store" },
          { to: "/api-reference/create-store", label: "Create a store" },
        ],
      },
    },
  };
  return (
    <>
    <Header/>
    
    <div className=" flex w-full !overflow-x-hidden  "  >

        <LeftSidebar data={navigationConfig} />
          {(path === '/api-reference/introduction' || path === '/api-reference/introduction/') && <ApiReferenceIntroduction />}
          {(path === '/api-reference/authentication' || path === '/api-reference/authentication/') && <ApiReferenceAuthentication />}
          {(path === '/api-reference/list-all-agent-builder-jobs' || path === '/api-reference/list-all-agent-builder-jobs/') && <ListAgentBuilderJobs />}
          {(path === '/api-reference/retrieve-agent-builder-job' || path === '/api-reference/retrieve-agent-builder-job/') && <RetrieveAgentBuilderJob />}

          {(path === '/api-reference/list-all-executor-cron-jobs' || path === '/api-reference/list-all-executor-cron-jobs/') && <ListAllAgentExecutorCronJobs />}
          {(path === '/api-reference/retrieve-executor-cron-job' || path === '/api-reference/retrieve-executor-cron-job/') && <RetrieveAnAgentExecutorCronJob/>}
          {(path === '/api-reference/delete-executor-cron-job' || path === '/api-reference/delete-executor-cron-job/') && <DeleteAnAgentExecutorCronJob/>}
          {(path === '/api-reference/update-executor-cron-job' || path === '/api-reference/update-executor-cron-job/') && <UpdateAnAgentExecutorCronJob/>}
          {(path === '/api-reference/create-executor-cron-job' || path === '/api-reference/create-executor-cron-job/') && <CreateAnAgentExecutorCronJob/>}
          {(path === '/api-reference/list-executor-jobs' || path === '/api-reference/list-executor-jobs/') && <ListAllAgentExecutorJobs/>}
          {(path === '/api-reference/list-all-builds' || path === '/api-reference/list-all-builds/') && <ListAllBuilds />}
          {(path === '/api-reference/retrieve-build' || path === '/api-reference/retrieve-build/') && <RetrieveABuild />}
          {(path === '/api-reference/list-all-executions' || path === '/api-reference/list-all-executions/') && <ListAllExecutions />}
          {(path === '/api-reference/retrieve-an-execution' || path === '/api-reference/retrieve-an-execution/') && <RetrieveExecution />}
          
          {(path === '/api-reference/create-executor-job' || path === '/api-reference/create-executor-job/') && <CreateAnAgentExecutorJob />}
          {(path === '/api-reference/list-agents' || path === '/api-reference/list-agents/') && <ListAgents />}
          {(path === '/api-reference/retrieve-executor-job' || path === '/api-reference/retrieve-executor-job/') && <RetrieveExecutorJob />}
          {(path === '/api-reference/retrieve-agent' || path === '/api-reference/retrieve-agent/') && <RetriveAgents />}
          {(path === '/api-reference/delete-agent' || path === '/api-reference/delete-agent/') && <DeleteAgents />}
          {(path === '/api-reference/update-agent' || path === '/api-reference/update-agent/') && <UpdateAgents />}
          {(path === '/api-reference/create-agent' || path === '/api-reference/create-agent/') && <CreateAgents />}
          {(path === '/api-reference/list-all-store' || path === '/api-reference/list-all-store/') && <ListAllStores/>}
          {(path === '/api-reference/retrieve-store' || path === '/api-reference/retrieve-store/') && <RetrieveAllStores/>}

          {(path === '/api-reference/create-store' || path === '/api-reference/create-store/') && <CreateStore/>}
          {(path === '/api-reference/update-store' || path === '/api-reference/update-store/') && <UpdateStore />}
          {(path === '/api-reference/delete-store' || path === '/api-reference/delete-store/') && <DeleteStore />}
    </div></>
  )
}

export default ApiReference