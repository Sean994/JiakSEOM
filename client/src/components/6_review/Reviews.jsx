import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AddReview from './AddReview';

const Reviews = ({ user }) => {
  const history = useHistory();
  useEffect(() => {
    if (!user.username) {
      history.push('/login');
    }
  }, [history, user]);

  console.log(user);

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
