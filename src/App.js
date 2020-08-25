import React, { useState, useEffect } from "react";
import "./App.css";
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export default function App() {
  const [images, setImages] = useState();
  // fetch(
  //   "https://api.unsplash.com/photos/?client_id=UMd3gSEjAXU2rrhv2dgZGWObqbWTKX4yv6vXQmr7go8"
  // )
  useEffect(() => {
    console.log("access key is", accessKey);
    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  // return an error if there is no access key
  // if (!accessKey) {
  //   return (
  //     <a href="https://unsplash.com/developers" className="error">
  //       Required: Get Your Unsplash API Key First
  //     </a>
  //   );
  // }
  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {[...Array(100)].map((_, index) => (
          <div className="image" key={index}>
            <img src="{image.alt_description.regular}" alt="Sample" />
          </div>
        ))}
      </div>
    </div>
  );
}
