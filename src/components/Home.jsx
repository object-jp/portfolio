import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'



const Home = () => {
  const Hello = styled.p `
    text-align: center;
    padding-top: 30vh;
    color: skyblue;
    font-size: 70px;
    animation: Hello 3s;
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