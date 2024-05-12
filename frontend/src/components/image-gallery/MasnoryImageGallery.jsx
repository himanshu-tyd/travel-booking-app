import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImg from "./galleryImages";

const MasnoryImageGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 500: 3, 700:4, 900: 5 }}>
        <Masonry gutter="1rem">
          {galleryImg.map((item, index) => (
            <img
              className="masonary__img"
              src={item}
              key={index}
              alt=""
              style={{
                width: "100%",
                display: "block",
                borderRadius: "10px",
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default MasnoryImageGallery;
