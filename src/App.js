// import logo from './logo.svg';
import "../src/App.css";
import "./App.css";
import React from 'react';
import VideoPlayer from './videoPlayer/video player';
///react project..........................

const App = () => {
  const videoList = [
    { title: 'Video 1', url:require("../src/videoPlayer/bird.mp4")},
    { title: 'Video 2', url:require("../src/videoPlayer/butterfly.mp4")},
    { title: 'video 3', url:require("../src/videoPlayer/nature.mp4")},

    // Add more videos as needed
  ];
  return (
    <div>
      <h1>React Video Player with List</h1>
      <VideoPlayer videoList={videoList} />
    </div>
  );
};
export default App;
