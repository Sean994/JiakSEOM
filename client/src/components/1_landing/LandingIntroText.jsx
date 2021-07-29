// This component just displays JSX code of the Introduction / Who We Are segments.
// The Images are broken for now on mobile devices (26 July).
// Gordon Chia, 26 July 2021

import { Carousel, Image } from 'react-bootstrap';

const LandingIntroText = () => {
  return (
    <Carousel className="slide carousel-fade">
      <Carousel.Item style={{ height: '500px' }}>
        <Image
          src="https://images.unsplash.com/photo-1617283458655-1ef09d4f17f2"
          alt="Welcome to JiakSEOM"
          fluid
        />

        <Carousel.Caption>
          <h1 className="geraldShadow">Welcome to JIAK섬 (JIAKSEOM)!</h1>
          <h3 className="geraldShadow">
            Delivering a taste of Korea to all the 한국-ry (hungry) people out
            there.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '500px' }}>
        <Image
          src="https://images.unsplash.com/photo-1478071573747-403b24bf59a9"
          alt="Who We Are"
          fluid
        />
        <Carousel.Caption>
          <h1 className="geraldShadow">Who We Are</h1>
          <h3 className="geraldShadow">
            We are a delivery platform catering to consumers in Singapore, who
            share a love of Korean food.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '500px' }}>
        <Image
          src="https://images.unsplash.com/photo-1603545959692-78ab733058c8"
          alt="History"
          fluid
        />
        <Carousel.Caption>
          <h1 className="geraldShadow">Our history</h1>
          <h4 className="geraldShadow">
            Founded in 2021 by a group of aspiring software engineers who share
            a common love for Korean food, but were disappointed by the lack of
            authentic Korean options on local food delivery platforms, JIAKSEOM
            was conceived to be the all-in-one destination for everyone wanting
            a taste of Korea delivered to their doorstep.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingIntroText;
