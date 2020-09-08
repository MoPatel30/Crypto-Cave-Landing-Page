import React from 'react';
import './App.css';


export class App extends React.Component{
  render(){
    return(
     <div>
   
       <div id="parent">Welcome to Techunity<div id="border"></div></div>
       <div id="parent"><a id = "main-statement">Your building journey awaits. </a><div id="border"></div></div>
       
      
     </div>
    )
  }
}


export class Join extends React.Component{
  constructor(){
    super()
    this.state = {
      join: "not joined"
    }
  }

  

  render(){
    return(
      <div>
       
        <a href = "https://github.com/MoPatel30/Techunity">
          <button className = "button1">Join Now</button>
        </a>

      </div>
    )
  }
}

export class Discord extends React.Component{
  render(){
    return(
      <iframe src="https://discordapp.com/widget?id=752624040757428322&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    )
  }
}

