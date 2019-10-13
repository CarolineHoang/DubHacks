import React from 'react';
import styled from 'styled-components';
import Loader from './loader.gif'

const Container = styled.div`
  background-color: #41B3A3;
  display: flex;
  height: 100vw;
  padding: 5vw;
  flex-direction: row;
  justify-content: center;
`
const Image = styled.img`
    max-height: 30%;
    max-width: auto;
    padding: 2rem;
`
const Text = styled.div `
    color: white;
    padding-bottom: 1vw;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 2rem;
`
const SubCont = styled.div`
    
`

export class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return(
            <Container>
            <Image src={this.props.url} alt={Loader}/>
            <SubCont>
            {
                this.props.labels.map(label => {
                return (<Text>{label}</Text>);
                })
            }
            </SubCont>
            </Container>
        );
    }
}

export default Display;

