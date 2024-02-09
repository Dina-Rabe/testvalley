import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Api1Phone(){
    const [carouselData, setCarouselData] = useState([]);
    
    const [carouselDataLength, setCarouselDataLength] = useState(0);
    useEffect(() => {
        async function fetchData() {
            try {
            const response = await fetch('https://api.testvalley.kr/main-banner/all');
            const jsonData = await response.json();
            setCarouselData(jsonData);
            setCarouselDataLength(parseInt(jsonData.length)/2);
            } catch (error) {
            console.log('Error:', error);
            }
        }
    
        fetchData();

    }, [carouselData]);

    const carouselItem = carouselData.map((data, index) => (
      <Carousel.Item key={index} interval={700}>
          <a href={data.pcImageUrl}>
              <img src={data.mobileImageUrl} 
                alt={data.title} className='imgAPI1Desk'/>
          </a>
          
      </Carousel.Item>
        ));


    return (
      <div id='Api1Phone'>
        {carouselData ? (
          <div className='carouselContainer'>
             <Carousel 
                defaultActiveIndex={parseInt(carouselDataLength)} 
                variant='dark'
                interval={700}
              >
                {carouselItem}
            </Carousel>
          </div>
        ) : (
          <div>
            {/* Render a loading state while data is being fetched */}
            Loading...
          </div>
        )}
      </div>
    );
}
