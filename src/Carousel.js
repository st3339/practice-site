import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';


function Carousel() {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
  let photos = [
        {
            type: "Pic1",
            image: require("./Pictures/Pic1.jpg")
        },
        {
            type: "Pic2",
            image: require("./Pictures/Pic2.jpg")
        },
        {
            type: "Pic3",
            image: require("./Pictures/Pic3.jpg")
        },
        {
            type: "Pic4",
            image: require("./Pictures/Pic4.jpg")
        }
  ]

  
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {photos.map((_, i) => (
          <li
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={_.image}/>
          </li>
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <ol style={{ display: 'flex' }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Carousel;