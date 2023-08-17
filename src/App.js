// App.js
import React from 'react';
import './App.css';
import FacebookCard from './FacebookCard';
import sampleImage from './sample image.jpg';

function App() {
  const user = {
    name: 'Wasif Raza',
    avatarUrl: sampleImage, 
  };

  return (
    <div className="App">
      <FacebookCard
        user={user}
        time="10 hr"
        imageUrl={sampleImage}
        postText="Captured a picture on Eid day in Madinah, where the empty road echoed serenity."
      />
    </div>
  );
}

export default App;
