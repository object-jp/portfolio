import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'


const Skills = () => {
  const Skills = styled.div `
    text-align: center;
    font-size: 40px;
  `
  const Table = styled.div `
    display: flex;
    height: 300px;
  `
  const FrontTable = styled.div `
    width: 50%;
    border-radius: 16px;
    background: linear-gradient(-90deg, #f46049, white);
  `
  const BackTable = styled.div `
    width: 50%;
    border-radius: 16px;
    background: linear-gradient(90deg, #1e9ae0, white);
  `
  const Front = styled.div `
    text-align: center;
    font-size: 30px;
  `
  const Back = styled.div `
    text-align: center;
    font-size: 30px;
  `
  const ListText = styled.ul `
    font-size: 20px;
  `
  return (
    <>
      <header>
      <Nav />
      </header>
      <main>
        <Skills>Skills</Skills>
        <Table>
          <FrontTable>
            <Front>フロントエンド</Front>
            <ListText>
                <li>HTML&CSS</li>
                <li>React(ES6)</li>
            </ListText>
          </FrontTable>
          <BackTable>
            <Back>バックエンド</Back>
            <ListText>
                <li>Ruby on Rails</li>
            </ListText>
          </BackTable>
        </Table>
      </main>
    </>
  );
}

export default Skills;