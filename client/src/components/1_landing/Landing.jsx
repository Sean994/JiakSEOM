
import PostalCode from "./PostalCode"
import LandingIntroText from './LandingIntroText.jsx';
import LandingFAQ from './LandingFAQ.jsx';

const Landing = (props) => {
    const {postal, setPostal, address, setAddress} = props
    return (
        <div>
            Landing page
            <PostalCode postal={postal} setPostal={setPostal}
            address={address} setAddress={setAddress}/>
            <LandingIntroText />
            <LandingFAQ />
        </div>
    )
}

export default Landing