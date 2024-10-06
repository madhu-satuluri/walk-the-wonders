
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import TripSelection from "./components/Tripselection";
import VirtualTour from "./components/VirtualTour";
import Quiz from "./components/Quiz";

// function App() {
//   return (

// <Router>
// <Routes>
//   <Route path="/" exact component={TripSelection} />
//   <Route path="/tour/:tourId" component={VirtualTour} />
// </Routes>
// </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TripSelection />} />
        <Route path="/tour/:tourId" element={<VirtualTour />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
