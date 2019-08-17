/*
  This component's purpose is to render the sliding images beneath
  the navigation bar. It is also the parent component of CarouselContent.

  The carousel component contains a responsive react module and documentation
  can be found at https://www.npmjs.com/package/react-responsive-carousel.

  There is a map method that iterates to get the overaly text for the image. A
  dynamic approach was taken to allow the option of cycling different messages
  if needed in the future.

  The images are imported from the assets/images/carousel folder to make them
  available to the Carousel node module.

  The styling for this component is found at ../styles/app.css from
  lines 55 to 105.
*/

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import CarouselContent from './CarouselContent';
import * as data from '../data/carouselData.json';

import Slide1 from '../assets/images/carousel/slide1.jpg'
import Slide2 from '../assets/images/carousel/slide2.jpg'
import Slide3 from '../assets/images/carousel/slide3.jpg'

class CarouselBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: data.default
    });
  }

  render() {
    return (
      <div className='carousel'>
        <div className='carousel-text-container'>
          <div className='carousel-text'>
            {this.state.data.map((carouselData, i) => {
              return <CarouselContent carouselData={carouselData} key={i} />
            })}
          </div>
        </div>

        <Carousel
          showArrows={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={1000}
          interval={5000}
          swipeable={true}
          emulateTouch={true}
          centerMode={false}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows={true}
        >

        <div className='slide1'>
          <img id='slide1' src={Slide1} alt='slide1'></img>
        </div>

        <div className='slide2'>
          <img id='slide2' src={Slide2} alt='slide2'></img>
        </div>

        <div className='slide3'>
          <img id='slide3' src={Slide3} alt='slide3'></img>
        </div>
        </Carousel>
      </div>
    )
  }
}

export default CarouselBanner;
