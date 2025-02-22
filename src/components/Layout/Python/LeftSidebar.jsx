import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";



// Reusable components
const NavLink = ({ to, children }) => (
  <Link to={to} className="text-md  font-semibold text-blue-400 mb-4 block">
    {children}
  </Link>
);

const CollapsibleSection = ({ label, isOpen, onToggle, children }) => (
  <div className="">
    <button className="flex justify-between w-full text-left py-2" onClick={onToggle}>
      <span className="text-wrap">{label}</span>
      {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    </button>
    {isOpen && <div className="ml-4 text-wrap">{children}</div>}
  </div>
);

const LeftSidebar = ({ data }) => {
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
    <div className="!w-[20%] min-h-screen  border-r p-4 bg-white ">
      {/* Top level links */}
      {data.topLinks.map((link) => (
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
        {Object.entries(data.resources).map(([key, section]) => (
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
