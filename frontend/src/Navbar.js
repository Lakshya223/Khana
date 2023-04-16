import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from './UserContext';
class Navbar extends Component{
    static contextType = UserContext
    state = {clicked :false };
    



    handleClick = () =>{
        this.setState({
            clicked:!this.state.clicked
        })
    }
   
    render(){
        const { user } = this.context;

    // Create a new object with the additional structure
    const newMenuItem = {
      title: user,
      url: "/Home",
      cName: "nav-links",
      icon: "fa-solid fa-user"
    };

    // Concatenate the new object to the end of the MenuData array
    const updatedMenuData = MenuData.concat(newMenuItem);
        return(
            <nav className="NavbarItems">
                <h1 className="logo">HelpChef <i className="fab fa-react"></i></h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className=
                    {
                        this.state.clicked ? "fas fa-times" : "fas fa-bars"
                    }
                    ></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                  { updatedMenuData.map((item,index)=>{
                    return(
                        <li key= {index}>
                            <Link to={item.url} className={item.cName}>
                                <i className={item.icon}></i> {item.title}
                            </Link>
                        </li>
                    )
                  })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;