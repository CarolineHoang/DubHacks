//DUBHACKS, Done by Chenoa in prep phase

import React, {Component} from 'react';
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
  width: 20%;
  justify-content: space-evenly;
  padding: 1rem;
`
const Buttons = styled.button`
  font-size: 1rem;
  background-color: rgb(148, 203, 201);
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1px;
  border-radius: 8px;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  -webkit-filter: drop-shadow(1px 1px 0 black)
    drop-shadow(-2px -2px 0 black);
  filter: drop-shadow(1px 1px 0 black) 
    drop-shadow(-2px -2px 0 black);
  &:hover {
    color: #41B3A3;
  }
`
const Selector = styled.input`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

class MainPage extends Component {
  constructor(){
    super();
    this.state={selection: '', loaded:0 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }
  



  handleSelectionChange(event) {
      var newValue = event.target.files[0];
      this.setState({   selection: newValue });
      // console.log(this.state.selection)
      }

    handleSubmit(event) {
      
      alert('Value Submitted: ' + this.state.selection);
    event.preventDefault();
    }

 

  render() {
  return (
    <Container>
      
      <SubContainer>
        <Image src={logo} alt="logo" />
      </SubContainer>
      <SubContainer>
        <Input>
          Input your video file here: 
        </Input>
          <Selector type="file" name="pic" accept="image/*" onChange={this.handleSelectionChange}/>
          <ButtonCon>
          <Buttons type= 'submit' onClick={this.handleSubmit}>Add Contact</Buttons>
          <Buttons>Detect</Buttons>
          </ButtonCon>
      </SubContainer>
    </Container>
   );
  }
}
export default MainPage;
