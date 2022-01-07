import React from 'react'
import Nav from './Nav'
import { FaGithub, FaTwitter } from "react-icons/fa"
import styled from 'styled-components'

const Profile = () => {
  const Icon = styled.a `
    text-decoration: none;
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
        <p>名前：正能 大雅(しょうのう たいが)</p>
        <p>生年月日：2003年06月12日</p>
        <p>出身：神奈川県</p>
        <p>自己PR</p>
        <Icon  href='https://github.com/object-jp' target="_blank"><FaGithub />Github</Icon>
        <Icon  href='https://twitter.com/object_Go' target="_blank"><FaTwitter />Twitter</Icon>
      </main>
    </>
  );
}

export default Profile;