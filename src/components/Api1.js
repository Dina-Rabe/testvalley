import React, { useEffect, useState } from 'react';

function Api1(){
    const [carouselData, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://api.testvalley.kr/main-banner/all');
          const jsonData = await response.json();
          setData(jsonData);
        //   console.log(jsonData);
        } catch (error) {
          console.log('Error:', error);
        }
      }
  
      fetchData();
    }, [carouselData]);
    return (
      <div>
        {carouselData ? (
            <div id="carouselDiv" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    {carouselData.map((data, index) => (
                        <div key={data.mainBannerId} className= "carousel-item">
                            <a href={data.linkUrl}>
                                <img src={data.pcImageUrl} alt={data.title} className='imgAPI1Desk'/>
                            </a>
                        </div>
                    ))}
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselDiv" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselDiv" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button> */}
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

export default Api1;