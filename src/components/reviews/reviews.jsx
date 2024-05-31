import React from 'react';
// import PropTypes from 'prop-types';
import ReviewItem from './review-item/review-item';
import NewReviewForm from './new-review-form/new-review-form';

const Reviews = (props) => {
  const {reviews} = props;
  return (
    <>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {
            reviews.map((review) => {
              return (
                <ReviewItem key={review.id} reviewItem={review}/>
              );
            })
          }
        </ul>
        {
          <NewReviewForm/>
        }
      </section>
    </>
  );
};

export default Reviews;
