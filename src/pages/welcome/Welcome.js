import React, { useEffect, useState } from "react";
import "./Welcome.css";
import image1 from "../../assests/img1.jpg";
import image2 from "../../assests/img2.jpg";
import image3 from "../../assests/img3.jpg";
import image4 from "../../assests/img4.jpg";
import image5 from "../../assests/img5.jpg";
import image6 from "../../assests/img6.jpg";
import image7 from "../../assests/img7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];
function Welcome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the interval time (in milliseconds) to adjust the speed of the slideshow

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        className="image"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
    </div>
  );
}

export default Welcome;
