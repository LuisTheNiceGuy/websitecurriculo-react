import foto_eu from './eu.jpg';
import "./Home.css";


function Home() {
  
    return ( 
        <>
            <img className='foto_eu' src={foto_eu} alt="Luis Gustavo CS"/>
            <h1>Hi, Im Luis Gustavo</h1>
        </>
     );
}

export default Home;