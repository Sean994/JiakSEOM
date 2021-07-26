// This component just displays JSX code of the Introduction / Who We Are segments.
// The Images are broken for now on mobile devices (26 July).
// Gordon Chia, 26 July 2021

import { Carousel, Image } from 'react-bootstrap';

const LandingIntroText = () => {
  return (
    <Carousel>
<Carousel.Item style={{'height':"500px"}}>
<Image
src="https://images.unsplash.com/photo-1596785236251-71fa49ac5760"
alt="Welcome to JiakSEOM"
fluid
/>

    <Carousel.Caption>
        <h1>Welcome to JIAK섬 (JIAKSEOM)!</h1>
        <p>Delivering a taste of Korea to all the 한국-ry (hungry) people out there.</p>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item style={{'height':"500px"}}>
<Image
src="https://images.unsplash.com/photo-1478071573747-403b24bf59a9"
alt="Who We Are"
fluid
/>
    <Carousel.Caption>
        <h1>Who We Are</h1>
        <p>We are a delivery platform catering to consumers in Singapore, who share a love of Korean food.</p>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item style={{'height':"500px"}}>
<Image
src="https://images.unsplash.com/photo-1521022887356-1db35c7bbf1f"
alt="History"
fluid
/>
    <Carousel.Caption>
        <h1>Our history</h1>
        <p>Founded in 2021 by a group of aspiring software engineers who share a common love for Korean food, but were disappointed by the lack of authentic Korean options on local food delivery platforms, JIAKSEOM was conceived to be the all-in-one destination for everyone wanting a taste of Korea delivered to their doorstep.</p>
    </Carousel.Caption>
</Carousel.Item>
    </Carousel>
  );
};

export default LandingIntroText;
