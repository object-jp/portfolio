import React from 'react'
import Nav from './Nav'


const Home = () => {
  const hello = {
    color: 'skyblue',
    fontSize: '70px',
    textAlign: 'center',
    lineHeight: '600px',
    animation: 'Hello 5s'
  }
  return (
    <>
      <header>
        <Nav />
      </header>
    <main>
      <p style={hello}>Hello!</p>
    </main>
    </>
  );
}

export default Home;