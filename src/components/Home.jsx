import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'



const Home = () => {
  const Hello = styled.p `
    color: skyblue;
    font-size: 70px;
    text-align: center;
    line-height: 600px;
    animation: Hello 5s;
  `
  return (
    <>
      <header>
        <Nav />
      </header>
    <main>
      <Hello>Hello!</Hello>
    </main>
    </>
  );
}

export default Home;