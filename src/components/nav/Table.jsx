import { useState, useEffect } from "react";
import "./table.css";
import YouTube from "react-youtube";
import ReactPaginate from "react-paginate";
import { ClipLoader } from "react-spinners"; // Import the spinner

const Table = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for larger screens

  // Video IDs for each category
  const videoIds = {
    all: [
      "_DT67NrXMLI",
      "f1owuYHaAu0",
      "uDurCBUDGYM",
      "1pbiWrsdmDQ",
      "rQavCo2VBDw",
      "MxeUBa7N44I",
      "fR592C-Pibc",
      "fd12oL11yg8",
    ],
    oop: [
      "1pbiWrsdmDQ",
      "rQavCo2VBDw",
      "MxeUBa7N44I",
      "fR592C-Pibc",
      "fd12oL11yg8",
    ],
    mad: ["_DT67NrXMLI", "f1owuYHaAu0", "uDurCBUDGYM"],
  };

  const opts = {
    height: "250px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const getCurrentTabVideos = () => {
    switch (activeTab) {
      case 0:
        return videoIds.all;
      case 1:
        return videoIds.oop;
      case 2:
        return videoIds.mad;
      default:
        return [];
    }
  };

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setCurrentPage(0); // Reset to the first page
  };

  const renderVideos = (ids) => {
    if (isLoading) {
      return (
        <div className="loader-container">
        <ClipLoader className="duha" color="#d85040" size={50} />
      </div>
      
      );
    }

    if (ids.length === 0) {
      return (
        <p style={{ textAlign: "center" }}>
          No content available for this category.
        </p>
      );
    }

    const start = currentPage * itemsPerPage;
    const currentItems = ids.slice(start, start + itemsPerPage);

    return currentItems.map((videoId, index) => (
      <div key={index} className="hotter">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    ));
  };

  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab, currentPage]);

  useEffect(() => {
    // Set itemsPerPage dynamically based on screen size
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3); // 1 for mobile, 3 for larger screens
    };

    updateItemsPerPage(); // Initialize
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const currentTabVideos = getCurrentTabVideos();

  return (
    <div>
      <div
        className="servicer11"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img loading="lazy" src="https://i.imgur.com/wOJE8Zi.png" alt="" />
      </div>
      <h2 className="skill_title">Our Work Showcase</h2>
      <p className="skills_para mm">
        Explore a selection of our
        <span className="mooha" style={{ fontWeight: "700" }}>
          {" "}
          projects{" "}
        </span>
        , showcasing the creative and functional solutions I provide. Each
        project represents a unique challenge and a successful outcome.
      </p>

      {/* TabGroup */}
      <div className="tab-group">
        <div className="tab-list">
          <button
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            All
          </button>
          <button
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            OOP
          </button>
          <button
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            MAD
          </button>
        </div>

        <div className="lino"></div>
      </div>

      <div className="tab-panels">
        <div className="tab-panel jo">
          {renderVideos(currentTabVideos)}{" "}
          {/* Render videos for the current page */}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={"..."} // Adds ellipsis for breaks
          pageCount={Math.ceil(currentTabVideos.length / itemsPerPage)} // Adjust for pagination
          marginPagesDisplayed={1} // Pages to display at the start and end
          pageRangeDisplayed={2} // Number of visible pages in the middle
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"prev-arrow"}
          nextClassName={"next-arrow"}
          breakClassName={"break-item"}
          breakLinkClassName={"break-link"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
        />
      </div>
    </div>
  );
};

export default Table;
