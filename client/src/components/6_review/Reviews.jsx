import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AddReview from './AddReview';

const Reviews = () => {
  return (
    <>
      {/* {user && ( */}
      <div>
        <AddReview />
      </div>
      {/* )} */}
      {/* {!user && <Redirect to="/landing" />} */}
    </>
  );
};

export default Reviews;
