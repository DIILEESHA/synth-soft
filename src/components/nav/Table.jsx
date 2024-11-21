import { useState } from 'react';
import './table.css';
import YouTube from 'react-youtube';

const Table = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Video IDs for each category
  const videoIds = {
    all: ['_DT67NrXMLI', 'f1owuYHaAu0', 'uDurCBUDGYM','1pbiWrsdmDQ', 'rQavCo2VBDw', 'MxeUBa7N44I', 'fR592C-Pibc', 'fd12oL11yg8'],
    oop: ['1pbiWrsdmDQ', 'rQavCo2VBDw', 'MxeUBa7N44I', 'fR592C-Pibc', 'fd12oL11yg8'],
    mad: ['_DT67NrXMLI', 'f1owuYHaAu0', 'uDurCBUDGYM'], // Added video IDs for the 'mad' category
  };
  

  const opts = {
    height: '250px',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const renderVideos = (ids) => {
    if (ids.length === 0) {
      return <p style={{textAlign:"center"}}>No content available for this category.</p>;
    }
    return ids.map((videoId, index) => (
      <div key={index} className="hotter">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    ));
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 0:
        return renderVideos(videoIds.all);
      case 1:
        return renderVideos(videoIds.oop);
      case 2:
        return renderVideos(videoIds.mad);
      default:
        return null;
    }
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="servicer11" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <img loading="lazy" src="https://i.imgur.com/wOJE8Zi.png" alt="" />
      </div>
      <h2 className="skill_title">Our Work Showcase</h2>
      <p className="skills_para mm">
        Explore a selection of our
        <span className="mooha" style={{ fontWeight: '700' }}> projects </span>,
        showcasing the creative and functional solutions I provide. Each project
        represents a unique challenge and a successful outcome.
      </p>

      {/* TabGroup */}
      <div className="tab-group">
        {/* TabList */}
        <div className="tab-list">
          <button
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)} // All Tab
          >
            All
          </button>
          <button
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)} // OOP Tab
          >
            OOP
          </button>
          <button
            className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)} // MAD Tab
          >
            MAD
          </button>
        </div>

        <div className="lino"></div>

        {/* TabPanels */}
        <div className="tab-panels">
          <div className="tab-panel jo">
            {getTabContent()} {/* Render the content for the active tab */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
