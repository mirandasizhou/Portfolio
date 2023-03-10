import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Here are some things I've created</h1>
        <h2>Project Atelier - Front End <em>an e-commerce website</em></h2>
        <h2>Project Atelier - Back End <em>an e-commerce website's system design</em></h2>
        <h2>Find Your Space <em>Airbnb but for parking</em></h2>
      </div>
    )
  }
}

export default Projects