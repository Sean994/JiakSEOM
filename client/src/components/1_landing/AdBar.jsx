import Carousel from 'react-multi-carousel';
import { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Adbar = () => {
  const [ad, setAd] = useState([]);
  
  useEffect(() => {
    axios.get('/api/v1/ads').then((res) => {
      setAd(res.data.data);
    });
  }, []);

  return (
    <div className="container mb-5">
      <h1>Ad Space</h1>
      <Carousel responsive={responsive} slidesToSlide={2}>
        {ad.map((ad, index) => (
          <div className="card"  key={index}>
            <img className="card-img-top" style={{height: "20rem"}} src={ad.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{ad.title}</h5>
              <p className="card-text">{ad.description} </p>
            </div>
            <a href={ad.link} class="btn btn-primary">Visit</a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
