import React from 'react';
import "./style.css";

const Hero = () => {
  return (
      <div className="hero-container container" id='home-section'> 
        <div className="hero-row">
          <div className="hero-col-1">
            <h3 className="font-weight-bold">
              Welcome to <br/>
              <span className="text-primary"> G</span>
              <span className="text-danger">o</span>
              <span className="text-warning">o</span>
              <span className="text-primary">g</span>
              <span className="text-success">l</span>
              <span className="text-danger">e </span> 
              Developer Student Clubs!
            </h3>
            <p >
              At Google Developer Student Clubs, we believe in the power of technology to make a positive impact on the
              world. So, whether you are here to learn something new or to contribute your skills to a worthy cause, we
              welcome you with open arms.
            </p>
          </div>

          <div className="hero-col-2">
            <model-viewer class="modelgdsc" id="gdsc" src={process.env.PUBLIC_URL + "/media/images/gdsc.glb" }
              camera-controls disable-zoom shadow-intensity="2" progress-bar="hide" disable-tap ar autoplay-reversed
            >
            </model-viewer>
          </div>
        </div>
      </div>
  );
};

export default Hero;