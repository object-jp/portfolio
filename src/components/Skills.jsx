import React from 'react'
import { Link } from 'react-router-dom';


const Skills = () => {
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
      <h2>Skills</h2>
    </main>
    </>
  );
}

export default Skills;