import React from 'react'
import { Link } from 'react-router-dom';
import { VscHome,VscAccount,VscSave,VscSearch } from "react-icons/vsc"
import styled from 'styled-components'

const Nav = () => {
  const Nav = styled.nav `
    background-color: skyblue;
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
        <li><Link className='link' to="/"><VscHome />Home</Link></li>
        <li><Link className='link' to="/profile"><VscAccount />Profile</Link></li>
        <li><Link className='link' to="/work"><VscSave />Work</Link></li>
        <li><Link className='link' to="/skills"><VscSearch />Skills</Link></li>
      </Ul>
    </Nav>
  )
}

export default Nav;