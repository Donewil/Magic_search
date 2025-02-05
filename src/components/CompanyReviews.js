import React from 'react';

const CompanyReviews = ({ company }) => {
  return (
    <div className="company-reviews">
      <h3>Reviews for {company.name}</h3>
      <div className="review-summary">
        <p>Rating: {company.rating} / 5</p>
        <p>{company.reviewCount} reviews</p>
      </div>
      <div className="reviews">
        {company.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>{review.comment}</p>
            <p><strong>Rating: </strong>{review.rating} / 5</p>
            <p><em>- {review.author}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyReviews;
