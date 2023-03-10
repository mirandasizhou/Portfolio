import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1 className="logo">Miranda Zhou</h1>
        <div className="jump">About</div>
        <div className="jump">Projects</div>
        <div className="jump">Contact Me</div>
      </div>
    )
  }
}

export default Header