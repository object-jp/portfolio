import React from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { VscHome,VscAccount,VscSave,VscSearch } from "react-icons/vsc"
import styled from 'styled-components'

const Nav = () => {
  const Nav = styled.nav `
    background-color: #5999e8;
    padding: 7px;
  `
  const Ul = styled.ul `
    display: flex;
    justify-content: space-around;
    list-style: none;
  `
  return (
    <Nav>
      <Ul>
        <IconContext.Provider value={{ size: '17px', style: { verticalAlign: 'middle'} }}>
          <li className='list'><Link className='link' to="/"><VscHome />Home</Link></li>
          <li className='list'><Link className='link' to="/profile"><VscAccount />Profile</Link></li>
          <li className='list'><Link className='link' to="/work"><VscSave />Work</Link></li>
          <li className='list'><Link className='link' to="/skills"><VscSearch />Skills</Link></li>
        </IconContext.Provider>
      </Ul>
    </Nav>
  )
}

export default Nav;