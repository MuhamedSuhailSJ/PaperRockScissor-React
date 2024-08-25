import styled from 'styled-components'

export const ScoreHeaderContainer = styled.div`
  background-color: transparent;
  height: 12vh;
  width: 90%;
  padding: 20px;
  border: 2px #ffffff solid;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) and (orientation: landscape) {
    min-height: 25vh;
    width: 60%;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    height: 10vh;
    width: 80%;
    padding: 20px;
  }

  @media screen and (min-width: 992px) {
    height: 15vh;
    width: 60%;
    padding: 25px;
  }
`

export const ScoreTitle = styled.h1`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Bree Serif';

  @media (orientation: landscape) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`

export const ScoreBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 100px;
  height: 65px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (orientation: landscape) {
    width: 120px;
    max-height: 80px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 90px;
  }
`

export const ScoreText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin-bottom: 0px;

  @media (orientation: landscape) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`

export const ScoreNumber = styled.p`
  color: #223a5f;
  font-size: 28px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 992px) {
    font-size: 32px;
  }
`
