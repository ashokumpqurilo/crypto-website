import React from "react";
import { useLocation } from "react-router-dom";
import Introduction from "../pythonsdk/Introduction/introduction";
import Authentication from "../pythonsdk/Authentication/authentication";
import Pagination from "../pythonsdk/Pagination/Pagination";
import LeftSidebar from "../components/Layout/Python/LeftSidebar";
import Header from "../components/Layout/Header";

const PythonPage = () => {
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
    <div className="">
      <Header />
      <div className="flex ">
        <LeftSidebar data={data}/>
        <main className="flex-1  lg:mr-64 w-full lg:w-auto">
          {(path === "/python-sdk/" || path === "/python-sdk") && (
            <Introduction />
          )}
          {(path === "/python-sdk/authentication" ||
            path === "/python-sdk/authentication/") && <Authentication />}
          {(path === "/python-sdk/pagination" ||
            path === "/python-sdk/pagination/") && <Pagination />}
        </main>
        {/* <RightSidebar /> */}
      </div>
    </div>
  );
};

export default PythonPage;
