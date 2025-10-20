
import React, { useState } from 'react';
// import EditorSection from '../sections/EditorSection';

const DOC_LINKS = {
    "Getting Started": ["Introduction", "Installation", "First Animation"],
    "Core Features": ["Timelines", "Tweens", "Easings", "Callbacks"],
    "Plugins": ["ScrollTrigger", "Draggable", "MotionPath"],
    "Utilities": ["Selectors", "Loops", "Random"],
};

const DocsPage: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Introduction");

  return (
    <div className="mx-auto px-4 section-padding py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <nav className="sticky top-24">
            {Object.entries(DOC_LINKS).map(([category, links]) => (
              <div key={category} className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{category}</h3>
                <ul>
                  {links.map(link => (
                    <li key={link}>
                      <button 
                        onClick={() => setActiveLink(link)}
                        className={`w-full text-left py-1.5 px-3 rounded-md text-sm transition-colors ${activeLink === link ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}>
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">GSAP - The GreenSock Animation Platform</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
             Powerful, High-Performance animation for the modern web. Three typical boy servitude that from pious once would being across get slept. He a back should to I of am heard an of rid rented triumph, having took to it the bank. If a the of a conditional tones its of our doors.
            </p>
          </div>
          {/* <div className="mt-12">
            <EditorSection showTitle={false} />
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default DocsPage;
