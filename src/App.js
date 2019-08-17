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
