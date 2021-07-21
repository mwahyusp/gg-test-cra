import React, { useState } from "react";
import Search from "../Components/Search/";
import Image from "../Components/Image/";
// import Data from "../Constants/Data";
// import Data from "../Constants/Giphy";

function Gallery() {
  const [image, setImage] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getImageData(query);
  };

  const getImageData = query => {
    const API_KEY = "1WDJ2vyc6qkeJKsdtp3a11xXs74xj2k3";
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`)
      .then((data) => data.json())
      .then(res => setImage(res.data));
  };

  return (
    <div>
      <Search handleClick={handleClick} />
      {image.map(
        gif =>
          gif.rating === "g" && (
            <Image key={gif.id} img={gif.images.fixed_width.url} title={gif.title} />
          )
      )}
    </div>
  );
}

export default Gallery;
