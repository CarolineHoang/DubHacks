//DUBHACKS, Done by Chenoa in prep phase

import React from 'react';
import logo from './logo.png';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #41B3A3;
  display: flex;
  height: 100vw;
  padding: 5vw;
  flex-direction: column;
`
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`
const Image = styled.img`
  padding-top: 5vw;
  width: 60vw;
  display: flex;
  justify-content: center;
  clear: both;
  -webkit-filter: drop-shadow(1px 1px 0 black)
    drop-shadow(-4px -4px 0 black);
  filter: drop-shadow(1px 1px 0 black) 
    drop-shadow(-4px -4px 0 black);
`
const Input = styled.div`
  color: white;
  padding-bottom: 1vw;
  font-size: 1.8rem;
  font-weight: bold;
`
const ButtonCon = styled.div`
  display: flex; 
  dislay: rows;
  width: 30%;
  justify-content: space-evenly;
  padding: 1rem;
`
const Buttons = styled.button`
  font-size: 1rem;
  background-color: rgb(148, 203, 201);
  border: none;
  color: white;
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
  border-radius: 8px;
  -webkit-transition-duration: 0.7s; 
  transition-duration: 0.5s;
  -webkit-filter: drop-shadow(1px 1px 0 black)
    drop-shadow(-2px -2px 0 black);
  filter: drop-shadow(1px 1px 0 black) 
    drop-shadow(-2px -2px 0 black);
  &:hover {
    background-color: #41B3A3;
    color: black;
  }
`
const Selector = styled.input`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

function App() {
  return (
    <Container>
      <SubContainer>
        <Image src={logo} alt="logo" />
      </SubContainer>
      <SubContainer>
        <Input>
          Input your video file here: 
        </Input>
          <Selector type="file" name="pic" accept="image/*"/>
          <ButtonCon>
          <form method="get" action="/#/face">
          <Buttons >Add Contact</Buttons>
          <Buttons >Detect</Buttons>
          </form>
          </ButtonCon>
      </SubContainer>
    </Container>
  );
}

export default App;
