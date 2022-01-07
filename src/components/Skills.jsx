import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'


const Skills = () => {
  const Skills = styled.h2 `
    text-align: center;
    font-size: 40px;
  `
  return (
    <>
      <header>
      <Nav />
      </header>
    <main>
      <Skills>Skills</Skills>
      <div></div>
    </main>
    </>
  );
}

export default Skills;