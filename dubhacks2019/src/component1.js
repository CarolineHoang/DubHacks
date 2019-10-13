import React, { Component } from "react";
import './App.css';

let API = "http://127.0.0.1:5000/zoo";

let API2 = "http://127.0.0.1:5000/urls";

class Component1 extends Component {

    constructor(props) {
        super(props);
        this.state= { users:null};
      }

    componentDidMount(){
        // console.log(API)
        this.postData(API)
        this.renderFetch(API)
        
        // console.log(this.state.users)
    }

    postData(API) {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('POST', API)
        // send the request
        xhr.send(JSON.stringify({ example: 'data' }))
    }




    renderFetch = (api) => {
        return fetch(api)
        // console.log("API")
        .then(res => res.json()) // allows us to read the json --- without the server will still console long that something is passed
        // .then(data => console.log(data))
        .then(data => this.setState({users: data.users}))
    }

    // create = (data) => {
    //     let newUser = this.state.user;

    // }
    
      render() {
        if (this.state.users != null){
            console.log(JSON.stringify(this.state.users.age))
        }
        
        // console.log(this.state.users)
        if (this.state.users != null){
            return(
        
                <div>{JSON.stringify(this.state.users.age)}</div>
                );
        }
        return(
            <div></div>
        )
      }
    }
    
    export default Component1;
