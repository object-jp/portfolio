import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub, FaTwitter } from "react-icons/fa"

const Profile = () => {
  const contactLink = {
    textDecoration: 'none',
    color: '#343434'
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
        <h2>プロフィール</h2>
        <img src=''/>
        <p>名前：正能 大雅(しょうのう たいが)</p>
        <p>生年月日：2003年06月12日</p>
        <p>出身：神奈川県</p>
        <p>自己PR</p>
        <a style={contactLink} href='https://github.com/object-jp' target="_blank"><FaGithub />Github</a>
        <a style={contactLink} href='https://twitter.com/object_Go' target="_blank"><FaTwitter />Twitter</a>
      </main>
    </>
  );
}

export default Profile;