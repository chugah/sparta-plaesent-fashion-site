import React from 'react';

const SliderData = props => (
    <div>
      <h1 className='carousel-title'>{(props.carouselData.headingOne)}</h1>
      <h1 className='carousel-title'>{(props.carouselData.headingTwo)}</h1>
      <h2 className='carousel-date'>{props.carouselData.date}</h2>
      <p className='carousel-description'>{props.carouselData.descriptionOne}</p>
      <p className='carousel-description'>{props.carouselData.descriptionTwo}</p>
    </div>
);

export default SliderData;
