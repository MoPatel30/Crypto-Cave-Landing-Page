import React from 'react';
import './sideBar.css';


export class SideBar extends React.Component{

    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    render(){
        return(
            <div>
                <span style={{fontSize:'30px', cursor:'pointer', color: "white"}} onClick={(event) => this.openNav(event)}>&#9776;</span>
            </div>
        )
    }
}
export class Stuff extends React.Component{

    closeNav(e) {
        e.preventDefault()
        document.getElementById("mySidenav").style.width = "0";
    }

    render(){
        return(
            <div>
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" style = {{ fontSize: "48px"}} onClick={(event) => this.closeNav(event)} >&times;</a>
                    
                    <a href="index.html" className = "tabFont" style = {{left: "-10px"}}>Home</a>
                </div>

            </div>
        )
    }
}


/*

<a href="https://www.notion.so/About-8d2592f716424d41a86f9a635ac321fb" className = "tabFont" style = {{left: "-10px"}}>About</a>
<a href="https://www.notion.so/Projects-5ffd982c3e3f4e1ba7d7e0adcdad7c97" className = "tabFont" style = {{left: "-10px"}}>Projects</a>    
                
*/