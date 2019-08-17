/*
  This component's main function to to fetch all its children
  components and renders them to the UI. It also handles the
  css stylesheet.
*/

import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import CarouselBanner from './components/CarouselBanner'
import PostContainer from './components/PostContainer'
import Footer from './components/Footer'
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavigationBar />
        <CarouselBanner />
        <PostContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
