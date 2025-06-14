import React from 'react';
import { SassColor } from 'sass';

const Hero = () => {
  const leadStyle = {
    fontSize: '6.7rem',
    fontWeight: '900',
    marginBottom: '1rem',
    wordSpacing: '0.1rem',
    letterSpacing: '2px',
    
  };

  const footerStyle={

      fontSize: '1.2rem',
      fontWeight: '500',
      color:'black',

  };

  const handleShop=()=>{

      alert("Please Login First");
  }
  return (
    <div className="container">
      <div className="row">
        {/* Left Column */}
        <div className="col">
          <figure>
            <blockquote className="blockquote">
              <h1 style={leadStyle}>YOUR FEET DESERVE THE BEST</h1>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title" style={footerStyle}>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.
              </cite>
            </figcaption>
          </figure>

          <button type="button" className="btn btn-primary btn-lg me-2 bg-danger text-white" onClick={handleShop}>Shop Now</button>
          <button type="button" className="btn ms-5 btn-secondary btn-lg bg-white text-dark" >Category</button>

          <div className="mt-4">
            <p>Also Available On</p>
            <div>
              <img src="/images/amazon.png" alt="amazon-logo" className="m-2" />
              <img src="/images/flipkart.png" alt="flipkart-logo"className="m-2" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col text-center">
          <img src="/images/hero-image.png" alt="Nike shoe" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
