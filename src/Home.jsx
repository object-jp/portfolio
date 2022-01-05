import React from 'react'
import { Link } from 'react-router-dom';
import style from './style.css'


const Home = () => {
  return (
    <>
      <header>
      <nav>
        <ul>
          <li><Link className='list' to="/">Home</Link></li>
          <li><Link className='list' to="/profile">Profile</Link></li>
          <li><Link className='list' to="/work">Work</Link></li>
          <li><Link className='list' to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </header>
    <main>
      <p>Hello!</p>
    </main>
    </>
  );
}

export default Home;