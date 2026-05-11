import React from "react";

interface ImageListProps {
  data: RestaurantDetail.RetaurantData | undefined;
}
const ImageList = ({ data }: ImageListProps) => {
  const images = data?.gallery_images || [];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.url} // or img.image_url, img.src — check your GalleryImage type
          alt={img.caption ?? `Gallery image ${index + 1}`}
          className="w-full h-48 object-cover rounded-xl"
        />
      ))}
    </div>
  );
};

export default ImageList;
