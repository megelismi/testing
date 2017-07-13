import React, { Component } from 'react';
import '../../styles/NavbarSlider.css';
import MenuItem from '../NavbarItems/MenuItem';
import Menu from '../NavbarItems/Menu';

class NavbarSlider extends Component {

    showLeft() {
        this.left.show();
    }

    showRight() {
        this.right.show();
    }

    render() {
        return <div>
            <button onClick={this.showLeft.bind(this)}>Show Left Menu!</button>
            <button onClick={this.showRight.bind(this)}>Show Right Menu!</button>

            <Menu ref={(input) => { this.left = input; }} alignment={"left"}>
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
            </Menu>

            <Menu ref={(input) => { this.right = input; }}  alignment={"right"}>
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
            </Menu>
        </div>;
    }
}

export default NavbarSlider;
