import LandingFAQ from './LandingFAQ.jsx';
import LandingIntroText from './LandingIntroText.jsx';
import PostalCode from './PostalCode';
import AddReview from '../6_review/AddReview';

const Landing = (props) => {
  const { postal, setPostal, address, setAddress } = props;
  return (
    <div className="bg-light bg-gradient">
      <div className="container-fluid">
        <AddReview />
        <LandingIntroText />
        <PostalCode
          postal={postal}
          setPostal={setPostal}
          address={address}
          setAddress={setAddress}
        />
      </div>
      <div className="container-lg bg-warning p-5 rounded-4">
        <LandingFAQ />
      </div>
    </div>
  );
};

export default Landing;
