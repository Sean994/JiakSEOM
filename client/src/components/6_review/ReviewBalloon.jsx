import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import React from 'react';
import Moment from 'react-moment';

const ReviewBalloon = ({ review }) => {
  const date = review.createdAt;
  
  return (
    <div className="card bg-white px-4 py-2 border border-warning border-4 rounded-3  shadow">
      <Rate
        value={review.rating ? review.rating : 0}
        className="fs-4"
        disabled
      />
      <p className="my-3 fw-bold">{review.review}</p>
      <div className=" d-flex justify-content-between text-secondary">
        <p>
          <FontAwesomeIcon
            icon={['fas', 'user']}
            className="me-2 text-warning"
          />
          <span className="fw-bold">{review.user.username}</span>
        </p>
        <Moment date={date} format="YYYY-MM-DD" className="text-secondary" />
      </div>
    </div>
  );
};

export default ReviewBalloon;
