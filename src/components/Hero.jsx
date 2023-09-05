import React from 'react';
import { Link  } from "react-router-dom"

const Hero = () => {
  // const history = useHistory();
  // const [isLoading, setIsLoading] = useState(false);

  // const handleLoading = () => {
  //   setIsLoading(false);
  //   // setTimeout(() => {
  //   //   setIsLoading(false);
  //   //   history.push('/home');
  //   // }, 3000); // Change this to 3000 for a 3-second delay
  // };
  
  return (
    <>
  {/* {isLoading && 

    <div className='flex justify-center items-center  bg-white min-h-screen  '>
      <span className="loading loading-ring loading-lg"></span>
    </div>
    
  } */}

  {/* {!isLoading &&    */}
    <div className="hero min-h-screen" data-theme="cupcake" style={{backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/hbz-bella-hadid-nike-1-1495637019.jpg?crop=1xw:1xh;center,top&resize=980:*'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <Link to="/home"><button  className="btn btn-accent" >Get Started</button></Link>
              {/* <button onClick={handleLoading} className="btn btn-accent" disabled={isLoading}>Get Started</button> */}
              {/* <Link to="/home">
                <button
                  onClick={handleLoading}
                  className="btn btn-accent"
                  disabled={isLoading}
                >
                  Get Started
                </button>
              </Link> */}
            </div>
        </div>
    </div>
  {/* } */}

    </>
    
  )
} 

export default Hero