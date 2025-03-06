import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [activeColor, setActiveColor] = useState(null);


  useEffect(() => {
    
    const colors = ['simon-green', 'simon-red', 'simon-yellow', 'simon-blue'];

    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setActiveColor(randomColor);

      setTimeout(() => setActiveColor(null), 500);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Bienvenu dans les années 30</h1>
      <p>Connectez vous pour retourner dans le passé</p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px',flexDirection:'column',alignItems:'center'}}>
        <div style={{width: '300px',display:'flex',justifyContent: 'space-around'}}>
          <Link to="/login" style={{ 
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '5px',
            width:'100px'
          }}>
            Se connecter
          </Link>
        </div>
        <div className='simon'>
          <div className={`simon-green ${activeColor === 'simon-green' ? 'active' : ''}`}></div>
          <div className={`simon-red ${activeColor === 'simon-red' ? 'active' : ''}`}></div>
          <div className={`simon-yellow ${activeColor === 'simon-yellow' ? 'active' : ''}`}></div>
          <div className={`simon-blue ${activeColor === 'simon-blue' ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
