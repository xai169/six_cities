import React from 'react';
// import PropTypes from 'prop-types';
import {RATING_STAR_WIDTH} from '../../const';
import {ReviewTypes} from '../../prop-types/review';

const ReviewItem = (props) => {
  const {reviewItem} = props;
  const {comment, date, id, rating, user} = reviewItem;
  return (
    <>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: Math.round(rating) * RATING_STAR_WIDTH + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime={date}>{date}</time>
        </div>
      </li>
    </>
  );
};

ReviewItem.propTypes = {
  reviewItem: ReviewTypes,
};

export default ReviewItem;
