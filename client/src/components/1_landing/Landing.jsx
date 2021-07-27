
import PostalCode from "./PostalCode"
import LandingIntroText from './LandingIntroText.jsx';
import LandingFAQ from './LandingFAQ.jsx';

const Landing = (props) => {

    return (
        <div>
            Landing page
            <PostalCode />
            <LandingIntroText />
            <LandingFAQ />
        </div>
    )
}

export default Landing