import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sidebarData = [
  {
    title: "Introduction",
    link: "/introduction",
  },
  {
    title: "Authentication",
    link: "/authentication",
  },
  {
    title: "Resources",
    subItems: [
      {
        title: "Agent Builder Jobs",
        subItems: [
          { title: "List all agent builder jobs", link: "/resources/agent-builder-jobs/list" },
          { title: "Retrieve an agent builder job", link: "/resources/agent-builder-jobs/retrieve" },
        ],
      },
      { title: "Agent Executor Cron Jobs", link: "/resources/agent-executor-cron-jobs" },
      { title: "Agent Executor Jobs", link: "/resources/agent-executor-jobs" },
      { title: "Agents", link: "/resources/agents" },
      { title: "Builds", link: "/resources/builds" },
      { title: "Executions", link: "/resources/executions" },
      { title: "Stores", link: "/resources/stores" },
    ],
  },
];

const ApiSidebar = () => {
  const router = useNavigate();
  const [openSections, setOpenSections] = useState({});
  const [activeLink, setActiveLink] = useState(router.pathname);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div>
      {sidebarData.map((item, index) => (
        <div key={index} className="mb-2">
          {item.subItems ? (
            <>
              <button
                className="flex justify-between w-full text-left py-2"
                onClick={() => toggleSection(item.title)}
              >
                <span>{item.title}</span>
                {openSections[item.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openSections[item.title] ? "auto" : 0, opacity: openSections[item.title] ? 1 : 0 }}
                className="overflow-hidden ml-4"
              >
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="mb-1">
                    {subItem.subItems ? (
                      <>
                        <button
                          className="flex justify-between w-full text-left py-2"
                          onClick={() => toggleSection(subItem.title)}
                        >
                          <span>{subItem.title}</span>
                          {openSections[subItem.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: openSections[subItem.title] ? "auto" : 0, opacity: openSections[subItem.title] ? 1 : 0 }}
                          className="overflow-hidden ml-4"
                        >
                          {subItem.subItems.map((linkItem, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={linkItem.link}
                              className={`block py-1 pl-4 transition-all ${
                                activeLink === linkItem.link ? "text-black font-semibold" : "text-black"
                              }`}
                              onClick={() => setActiveLink(linkItem.link)}
                            >
                              {activeLink === linkItem.link && (
                                <motion.span
                                  layoutId="activeIndicator"
                                  className="absolute left-2 w-2 h-2 bg-blue-400 rounded-full"
                                />
                              )}
                              {linkItem.title}
                            </a>
                          ))}
                        </motion.div>
                      </>
                    ) : (
                      <a
                        href={subItem.link}
                        className={`block py-1 transition-all ${
                          activeLink === subItem.link ? "text-black font-semibold" : "text-black"
                        }`}
                        onClick={() => setActiveLink(subItem.link)}
                      >
                        {activeLink === subItem.link && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute left-2 w-2 h-2 bg-blue-400 rounded-full"
                          />
                        )}
                        {subItem.title}
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            </>
          ) : (
            <a
              href={item.link}
              className={`block py-2 transition-all ${
                activeLink === item.link ? "text-blue-400 font-semibold" : "text-black font-[500]"
              }`}
              onClick={() => setActiveLink(item.link)}
            >
              {activeLink === item.link && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute left-2 w-2 h-2 bg-blue-400 rounded-full"
                />
              )}
              {item.title}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApiSidebar;
