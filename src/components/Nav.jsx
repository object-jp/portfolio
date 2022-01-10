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
  const List = styled.li `
    color: white;
    text-shadow: 2px 1.5px black;
    &:hover{
      transition: all 0.3s ease 0s;
      transform: scale(1.3);
    }
  `
  return (
    <Nav>
      <Ul>
        <IconContext.Provider value={{ size: '17px', style: { verticalAlign: 'middle'} }}>
          <Link style={{ textDecoration: 'none' }} to="/"><List><VscHome />Home</List></Link>
          <Link style={{ textDecoration: 'none' }} to="/profile"><List><VscAccount />Profile</List></Link>
          <Link style={{ textDecoration: 'none' }} to="/work"><List><VscSave />Work</List></Link>
          <Link style={{ textDecoration: 'none' }} to="/skills"><List><VscSearch />Skills</List></Link>
        </IconContext.Provider>
      </Ul>
    </Nav>
  )
}

export default Nav;