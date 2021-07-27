
import PostalCode from "./PostalCode"
import LandingIntroText from './LandingIntroText.jsx';
import LandingFAQ from './LandingFAQ.jsx';

const Landing = (props) => {
    const {postal, setPostal, address, setAddress} = props
    return (
        <div>
            <LandingIntroText />
             <PostalCode postal={postal} setPostal={setPostal}
            address={address} setAddress={setAddress}/>
            <LandingFAQ />
        </div>
    )
}

export default Landing