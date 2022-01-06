import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  const hello = {
    color: 'skyblue',
    fontSize: '70px',
    textAlign: 'center',
    lineHeight: '600px',
    animation: 'Hello 5s'
  }
  return (
    <>
      <header>
      <nav>
        <ul>
          <li><Link className='list' to="/">Home</Link></li>
          <li><Link className='list' to="/profile">Profile</Link></li>
          <li><Link className='list' to="/work">Work</Link></li>
          <li><Link className='list' to="/skills">Skills</Link></li>
        </ul>
      </nav>
      </header>
    <main>
      <p style={hello}>Hello!</p>
    </main>
    </>
  );
}

export default Home;