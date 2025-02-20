import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
// Navigation configuration
const navigationConfig = {
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
        { to: "/resources/agent-retrieveanagent", label: "Retrieve an agent" },
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
// Reusable components
const NavLink = ({ to, children }) => (
  <Link to={to} className="text-lg font-semibold text-blue-400 mb-4 block">
    {children}
  </Link>
);
const CollapsibleSection = ({ label, isOpen, onToggle, children }) => (
  <div>
    <button className="flex justify-between w-full text-left py-2" onClick={onToggle}>
      <span>{label}</span>
      {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    </button>
    {isOpen && <div className="ml-4">{children}</div>}
  </div>
);
const LeftSidebar = () => {
  const [openSections, setOpenSections] = useState({
    resources: true,
    agentBuilderJobs: true,
    agentExecutorCronJobs: false,
    agentExecutorJobs: false,
    agents: false,
  });
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className=" w-[300px] border-r p-4 bg-white ">
      {/* Top level links */}
      {navigationConfig.topLinks.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.label}
        </NavLink>
      ))}
      {/* Resources section */}
      <CollapsibleSection
        label="Resources"
        isOpen={openSections.resources}
        onToggle={() => toggleSection("resources")}
      >
        {/* Resource subsections */}
        {Object.entries(navigationConfig.resources).map(([key, section]) => (
          <CollapsibleSection
            key={key}
            label={section.label}
            isOpen={openSections[key]}
            onToggle={() => toggleSection(key)}
          >
            {section.items.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </CollapsibleSection>
        ))}
      </CollapsibleSection>
    </div>
  );
};
export default LeftSidebar;
