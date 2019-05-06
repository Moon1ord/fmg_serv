import React, { Component } from 'react';
import HeadNav from './components/headmenu/navigation';
import SideBar from './components/sideBarMenu/sideBar';
import './App.css'

class App extends Component {
  render() {
    return (
        <div>
            <HeadNav/>
            <SideBar/>
        </div>
    );
  }
}

export default App;
