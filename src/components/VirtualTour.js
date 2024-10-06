// import React from "react";
// import { useParams } from "react-router-dom";
import "./VirtualTour.css";
import tourVideo1 from "../assests/tours/tourVideo.mp4";
import pyramids from "../assests/tours/pyramids.mp4"; 
// Import your video
// const VirtualTour = () => {
//   const { tourId } = useParams();
  
//   const tourData = {
//     1: {
//       name: "The Pyramids of Egypt",
//       image: "/assets/tours/tour1.jpg",
//       description: "Explore the world-famous pyramids of egypt"
//     },
//     2: {
//       name: "The Great wall of china",
//       image: "/assets/tours/tour2.jpg",
//       description: "Take a tour of one of the most iconic natural wonders in the world."
//     }
//   };

//   const tour = tourData[tourId];

//   return (
//     <div>
//       <h1>{tour.name}</h1>
//       <img src={tour.image} alt={tour.name} />
//       <p>{tour.description}</p>
//       <button>Next</button>
//     </div>
//   );
// };

// export default VirtualTour;
import React from "react";
import { useParams, Link } from "react-router-dom";
import pyramidImage from "../assests/tours/tour1.webp";
import tajmahal from "../assests/tours/tour2.jpg";
import greatwall from "../assests/tours/tour2.jpg.webp";
import Colosseum from "../assests/tours/Colosseum-Rome-Italy.webp";

const VirtualTour = () => {
  const { tourId } = useParams();

  
  const tourData = {
    2: {
    name:"The Pyramids of Egypt",
     image: pyramidImage,
      description: "Explore the world-famous Pyramids of Egypt. Discover the history, the architecture, and the mysterious beauty of one of the ancient wonders of the world.",
      nextTourId: 3,
      video: pyramids,
      streetview:"https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2f%4029.97556936,31.13219554,70.13025189a,0d,60y,291.40295473h,99.6595653t,0r%2fdata%3dCgRCAggBIjAKLEFGMVFpcFBoc2dnVm1GRFlBekltVjVOUEtqN0VuSDlOV3ZYMFFGcEl2U2Q2EAU6AwoBMEoNCP___________wEQAQ",
    },
    1: {
      name: "Taj Mahal",
      image: tajmahal, 
      description: "Walk through the Taj Mahal, a symbol of eternal love and one of the most beautiful monuments in the world. Discover its rich history, stunning Mughal architecture, and the timeless beauty that makes it a wonder of the world",
      nextTourId: 2, 
      video: tourVideo1,
      streetview:"https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2fsearch%2fTaj%2bmaal%2f%4027.17388918,78.04225162,184.577882a,0d,85.11703697y,6.6339442h,92.73879563t,0r%2fdata%3dCiwiJgokCWkCbSquN0RAEW2hpVDjNkRAGdjUTo4SJV1AIeolJH3vI11AQgIIASIwCixBRjFRaXBQRkdqOGtRTTk3TUV6R1drMFBzUjdINzZHV0JBWGhFQXhCV0k2chAFOgMKATBKDQj___________8BEAE",
      quizLink :"/quiz"
    },
    3:{
      name:"The Great Wall of China",
      image: greatwall,
      description:"Walk through the Great Wall of China. Learn about its significance and why it's one of the most impressive structures in human history.something liek this but for taj mahal ",
      nextTourId: 4,
    },
    4:{
      name:"Colosseum",
      image:Colosseum,
      description:"Explore the Colosseum",
      nextTourId:null,
    }

  };

  const tour = tourData[tourId];



  return (
    <div className="virtual-tour">
      <h1>{tour.name}</h1>
      <div 
        className="tour-image" 
        style={{
          backgroundImage: `url(${tour.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', 
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
      </div>
      <p>{tour.description}</p>
      <a href={tour.streetview} target="_blank" rel="noopener noreferrer">
        <button>Explore in Street View</button>
      </a>
      <div className="video-container">
        <video width="100%" height="auto" controls>
          <source src={tour.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        {tour.quizLink && (
          <Link to={tour.quizLink}>
            <button>Take the Quiz</button>
          </Link>
        )}
          </div>
      {tour.nextTourId ? (
        <Link to={`/tour/${tour.nextTourId}`}>
          <button>Next Tour</button>
        </Link>
      ) : (
        <Link to="/">
          <button>Go Back</button>
        </Link>
        
      )}
      
    </div>
  );
};

export default VirtualTour;
