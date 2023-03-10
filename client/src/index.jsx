import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import About from './components/about.jsx';
import Header from './components/header.jsx';
import Intro from './components/intro.jsx';
import Projects from './components/projects.jsx';
import Sidebar from './components/sidebar.jsx';
import Contact from './components/contact.jsx';
import styles from './assets/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {/* <Sidebar /> */}
        <About />
        <Intro />
        <Projects />
        {/* <Contact /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;