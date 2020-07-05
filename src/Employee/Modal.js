import React, { Component } from "react";

import ReactDOM from 'react-dom';


import './Modal.css';

const modalRoot = document.getElementById("app");
//const modalRoot = document.getElementById("modal-root");

const modalStyle = {
    backgroundColor: '#78f89f',
    opacity:0.9,
    borderRadius: 5,
    minWidth: '50%',
    maxWidth: '80%',
    minHeight: '50%',
    maxHeight: '100%',
    margin: '0 auto',
    padding: 30,
    position: "fixed",
    left: 10,
    top: 10
    

};



export default class Modal extends Component {

    constructor(props) {
        super(props);
        console.log("Modal constructor ...")  ;   
      //  this.el = document.createElement("div");
       // this.el.className = "modal";
    }
 /*
    componentDidMount() {    
        console.log("Modal ComponentDidMount");    
         modalRoot.appendChild(this.el);
     }   

     componentWillUnmount() {        
         modalRoot.removeChild(this.el);
     }*/

   
    render() {
        return ReactDOM.createPortal(<div style={modalStyle}>{this.props.children}</div>,     
        modalRoot);
        
        //ReactDOM.createPortal(<div style={modalStyle}>{this.props.children}</div>, 
            //modalRoot);
            
    }
}