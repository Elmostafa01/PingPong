import React , { useEffect} from 'react'
import LandingNav from '../components/LandingNav'
import LandingPageLeft from '../components/LandingPageLeft';
import LandingPageRight from '../components/LandingPageRight';

const LandingPage: React.FC = () => {
  useEffect(() => {
    const blob = document.getElementById('blob');
    console.log('hmm')
    if (blob) {
      document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`
          },
          { duration: 3000, fill: 'forwards' }
        );
      };
    }
  }, []);

  return (
    <div className='LandingPage'>
        <div className="effect">
          <div className="circle" id="blob"></div>
          <div className="blur" id="blur"></div>
        </div>
      <LandingNav />
      <div className="mid-align-content">
        <LandingPageLeft />
        <LandingPageRight />
      </div>
    </div>
  )
}

export default LandingPage
