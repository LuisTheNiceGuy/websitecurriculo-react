import foto_eu from './eu.jpg';
import "./Home.css";
import {Typewriter} from 'react-simple-typewriter'

function Home() {
  
    return ( 
        <>
          <div className='container'>
            <img className='foto_eu' src={foto_eu} alt="Luis Gustavo CS"/>
           <span className="apresentacao">
              <Typewriter 
                words={["Hi, i'm Luis Gustavo"]}
                cursor
                
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
              />
           </span>
                  
          </div>
        </>
     );
}

export default Home;