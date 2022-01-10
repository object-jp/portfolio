import React from 'react'
import Nav from './Nav'
import styled, { keyframes } from 'styled-components'



const Home = () => {
  const Animation = keyframes `
    from {
      opacity: 0;
      transform: translateY(30px);
    }
  `
  const Hello = styled.p `
    text-align: center;
    padding-top: 30vh;
    color: skyblue;
    font-size: 70px;
    animation: ${Animation} 3s ease-in;
  `
  return (
    <>
      <header>
        <Nav />
      </header>
    <main>
      <Hello>Hello!</Hello>
      <p></p>
    </main>
    </>
  );
}

export default Home;