import React from 'react';
import { Button } from '@mui/material';
import { Description } from '@mui/icons-material';

const RecommendationItem = ({ recommendation }) => {
  // Event handler to prevent the default behavior of the button
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    // Add any other logic here if needed
  };

  return (
    <div className="card" style={{  margin: "1rem 0",}}>
      <h5 className="card-header" style={{ display: "flex", gap: "1rem",}}>{recommendation.description} <Button href="#" variant="contained" color="primary" onClick={handleClick}>
          Go somewhere
       
        </Button> <Description  /></h5>
      
      <div className="card-body" style={{ display: "flex", gap: "1rem",}}>
        <Button href="#" variant="contained" color="warning" onClick={handleClick}>
          Go somewhere
        </Button>
        <Button href="#" variant="contained" color="warning" onClick={handleClick}>
          Go somewhere
        </Button>
        <Button href="#" variant="contained" color="warning" onClick={handleClick}>
          Go somewhere
        </Button>
        <Button href="#" variant="contained" color="warning" onClick={handleClick}>
          Go somewhere
        </Button>
      
      </div>
    </div>
  );
};

export default RecommendationItem;
