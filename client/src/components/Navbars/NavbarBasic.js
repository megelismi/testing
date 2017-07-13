import React, { Component } from 'react';
import '../../styles/NavbarBasic.css';

class NavbarBasic extends Component {

    constructor (props) {
        super(props);
        this.state = {
            location: 'Home'
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display=== 'block') {
            linksEl.style.display= 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }


    render() {
        return (
            <div className="navbar-wrapper">
            <nav className="navbar">
            <div className="menu-icon-wrapper" onClick={this.toggleMenu}>
    <div className="bar"/>
            <div className="bar"/>
            <div className="bar"/>
            <div className="narrowLinks">
            <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div>
        </div>
        <h3 className="navbar-location">{this.state.location}</h3>
        </nav>
        <div className="test"> </div>
            </div>
    );
    }
}

export default NavbarBasic;
