import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewBalloon from './ReviewBalloon';

const ShowReview = ({ id }) => {
  const [reviews, setReviews] = useState('');

  console.log(reviews);

  useEffect(() => {
    axios.get(`/api/v1/reviews/${id}`).then((res) => {
      setReviews(res.data.data.reviews);
    });
  }, [id]);

  return (
    <div className="container col-11">
      {reviews &&
        reviews.map((review) => (
          <ReviewBalloon review={review} key={review._id} />
        ))}
      {!reviews && (
        <div className=" p-5">
          <h5>No review yet</h5>
          <p>Would you like to be the first to write a review? 💚</p>
        </div>
      )}
    </div>
  );
};

export default ShowReview;
