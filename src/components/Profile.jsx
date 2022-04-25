import React from 'react'
import Nav from './Nav'
import { FaGithub, FaTwitter } from "react-icons/fa"
import styled from 'styled-components'
import { IconContext } from 'react-icons'

const Profile = () => {
  const Icon = styled.a `
    display: inline-block;
    margin: 0 5px;
    color: #343434;
  `
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h2>プロフィール</h2>
        <img src='' alt="自分の写真" />
        <p>名前：正能 大雅(ショウノウ　タイガ)</p>
        <p>生年月日：2003年06月12日</p>
        <p>出身：神奈川県</p>
        <p>大学：日本大学文理学部情報科学科</p>
        <p>自己PR</p>
        <hr />
        <IconContext.Provider value={{color: 'gray', size: '25px'}}>
          <Icon href='https://github.com/object-jp' target="_blank"><FaGithub /></Icon>
          <Icon href='https://twitter.com/object_Go' target="_blank"><FaTwitter /></Icon>
        </IconContext.Provider>
      </main>
    </>
  );
}

export default Profile;