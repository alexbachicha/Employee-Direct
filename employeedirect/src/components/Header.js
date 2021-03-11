import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee-Direct</h1>
                <p>Click on the carrots to filter employees by heading or use the search box to define your results</p>
            </div>
        )
    }
}