import React, { useState } from 'react';
import RecommendationItem from '../component/RecommendationItem'; // Assuming you have a RecommendationItem component
import "../styles/recomedation.css"
import Search from './Search';
import Pagination from '@mui/material/Pagination';
import Tabsection from "../component/Tabsection";

const Recommendation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recommendationsPerPage = 6;
  const totalRecommendations = 100; // Assuming you have 100 recommendations in total

  const totalPages = Math.ceil(totalRecommendations / recommendationsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Simulated recommendations data
  const recommendations = [];
  for (let i = 1; i <= totalRecommendations; i++) {
    const maxLength = 50; // Maximum length of the description
    const originalDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium id omnis quam ea eligendi expedita odio provident ipsam laboriosam? Eos itaque fugit repudiandae. ${i}`;
    const trimmedDescription = originalDescription.length > maxLength ? originalDescription.slice(0, maxLength) + "..." : originalDescription;
  
    recommendations.push({
      id: i,
      title: `Recommendation ${i}`,
      description: trimmedDescription,
    });
  }

  return (
    <div className="recommendation-container" >
      <Search/>
     <Tabsection/>
      {/* <Tabsection/> */}

      <div className="recommendation-list">

        {recommendations
          .slice((currentPage - 1) * recommendationsPerPage, currentPage * recommendationsPerPage)
          .map((recommendation) => (
            <RecommendationItem key={recommendation.id} recommendation={recommendation} />
          ))}
      </div>
      <div className="pagination">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          boundaryCount={1}
          siblingCount={1}
          color="primary"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Recommendation;
