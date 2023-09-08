import { useEffect, useState } from 'react';
import './style.scss';

function WaitingPage() {

  const [, setDotCount] = useState(0);

  useEffect(() => {
    const dots = document.querySelectorAll('.dot');

    const toggleDots = () => {
      dots.forEach((dot, index) => {
        setTimeout(() => {
          dot.classList.toggle('hidden');
        }, index * 500);
      });
    }

    const dotsInterval = setInterval(() => {
      toggleDots();
    }, 1500);

    const titleInterval = setInterval(() => {
      setDotCount((prevDotCount) => (prevDotCount + 1) % 4);
    }, 500);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div className='waiting' id='waiting'>
      <div className="waiting-page">
        <model-viewer 
          id="gdsc" 
          src={process.env.PUBLIC_URL + "/media/images/gdsc.glb" }
          camera-controls interaction-prompt="when-not-focused" 
          progress-bar="hide"
        >
        </model-viewer>
        <div className="content">
            <h3>GDSC EMSI RABAT</h3>
            <h1>COMING SOON</h1>
            <div className="dots-container">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingPage