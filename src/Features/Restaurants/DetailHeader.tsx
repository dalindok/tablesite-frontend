import React from "react";

interface DetailHeaderProps {
  detail: RestaurantDetail.RetaurantData | undefined;
}

const DetailHeader = ({ detail }: DetailHeaderProps) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-96"
      style={{ backgroundImage: `url(${detail?.cover_image_url})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70" />

      {/* Content sits above the overlay */}
      <div className="relative z-0 flex flex-col justify-end h-full pb-6 pl-16">
        {/* Breadcrumb */}
        <div className="flex flex-row items-center text-sm text-text-muted mb-4 gap-2">
          <p className="hover:text-primary cursor-pointer">Home</p>
          <span>/</span>
          <p className="hover:text-primary cursor-pointer">Restaurant</p>
          <span>/</span>
          <p className="hover:text-primary cursor-pointer">{detail?.name}</p>
        </div>

        {/* Restaurant name */}
        <h1 className="text-white text-4xl md:text-5xl font-bold font-libre leading-tight">
          {detail?.name}
        </h1>

        {/* Meta info */}
        <div className="flex flex-row flex-wrap items-center gap-4 text-white text-sm mt-4">
          <span>
            ⭐ {detail?.average_rating} ({detail?.total_reviews} reviews)
          </span>
          <span>🍽️ {detail?.cuisine_type}</span>
          <span>📍 {detail?.address}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
