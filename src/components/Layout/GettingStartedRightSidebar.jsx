import React from "react";
import { Link } from "react-router-dom";

const navigationData = [
  {
    section: 'getting-started',
    items: [
      {
        id: 'create-agent',
        title: 'Create an agent',
        children: [
          { id: 'script', title: 'Script' },
          { id: 'requirements', title: 'Requirements' },
          { id: 'environment-variables', title: 'Environment variables' }
        ]
      },
      {
        id: 'execute-agent',
        title: 'Execute an agent',
        children: [
          { id: 'scheduled', title: 'Scheduled' },
          { id: 'manual', title: 'Manual' }
        ]
      },
      {
        id: 'request',
        title: 'Request',
        children: [
          { id: 'payload', title: 'Payload' }
        ]
      },
      {
        id: 'logging',
        title: 'Logging'
      },
      {
        id: 'return-value',
        title: 'Return value'
      }
    ]
  },
  {
    section: 'store',
    items: [
      {
        id: 'create-store',
        title: 'Create a store'
      },
      {
        id: 'access-store',
        title: 'Access a store'
      },
      {
        id: 'use-store',
        title: 'Use a store',
        children: [
          { id: 'supported-types', title: 'Supported types' }
        ]
      },
      {
        id: 'transactions',
        title: 'Transactions'
      },
      {
        id: 'locking',
        title: 'Locking'
      }
    ]
  }
];

const GettingStartedRightSidebar = () => {
  const [activeSection, setActiveSection] = React.useState('');
  
  const currentPath = window.location.pathname;
  const currentSection = currentPath === '/data-storage' ? 'store' : 'getting-started';
  const currentNavigation = navigationData.find(nav => nav.section === currentSection);

  React.useEffect(() => {
    const observerOptions = {
      rootMargin: '-40% 0px -80% 0px',  // Considers the middle 25% of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    document.querySelectorAll('[id]').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 54;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-0 top-14 w-64 h-full border-l p-4 bg-white">
      <nav className="space-y-2">
        {currentNavigation?.items.map((section) => (
          <div key={section.id}>
            <Link
              to={`/${currentSection}#${section.id}`}
              className={`block ${activeSection === section.id ? 'text-blue-600' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              <h3 className={`font-medium mb-1 hover:text-blue-600 transition-colors ${
                activeSection === section.id ? 'text-blue-600' : 'text-gray-800'
              }`}>
                {section.title}
              </h3>
            </Link>
            {section.children && (
              <div className="space-y-0.5">
                {section.children.map((child) => (
                  <Link
                    key={child.id}
                    to={`/${currentSection}#${child.id}`}
                    className={`block px-2 py-1 text-sm hover:text-blue-600 transition-colors ${
                      activeSection === child.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(child.id);
                    }}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default GettingStartedRightSidebar;
