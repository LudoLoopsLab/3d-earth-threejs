import React from "react"
import styled from "styled-components"

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 50%;
  top: 0;
  left: 0;
  // background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`

const Logo = styled.h1`
  margin: 0;
  padding-top: 10px;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`

const Slogan = styled.h4`
  margin: 0;
  padding-top: 13%;
  color: #fff;
  font-weight: Donate700;
  font-size: 30px;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
  @media screen and (max-width: 600px) {
    padding-top: 50px;

    max-width: 75%;
    font-size: 13px;
  }
`

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Outerspace</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>
        Circumnavigated with pretty stories for which there's little good
        evidence galaxies descended from astronomers culture astonishment?
      </Paragraph>
      <DonateButton>Donate</DonateButton>
    </TopSectionContainer>
  )
}
