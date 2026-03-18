import ReviewCard from "@/components/Card/ReviewCard";

const ReviewData = {
  rating: 4.9,
  reviewCount: 1247,
  ratingBreakdown: { 5: 80, 4: 14, 3: 4, 2: 2 },
  reviews: [
    {
      id: 1,
      name: "Sophea Lim",
      avatar: "🐱",
      avatarBg: "#FDDCB5",
      timeAgo: "2 weeks ago",
      rating: 5,
      text: "Absolutely amazing food and atmosphere. The carbonara was the best I've ever had. Booking through DinEasy was seamless. Will definitely be back!",
    },
    {
      id: 2,
      name: "Dara Chan",
      avatar: "🐯",
      avatarBg: "#B5E0D4",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Great place for a date night. The pizza from the wood-fired oven is incredible. Staff is very friendly and attentive. Highly recommend!",
    },
  ],
};

const ReviewSection = () => {
  return (
    <div className="mt-6">
      <div className="bg-gray-100 rounded-xl p-5 mb-5 flex gap-6 items-center">
        <div className="text-center shrink-0">
          <p className="text-5xl font-black text-gray-900">
            {ReviewData.rating}
          </p>
          {/* <Stars rating={ReviewData.rating} size="lg" /> */}
          <p className="text-xs text-gray-400 mt-1">
            {ReviewData.reviewCount.toLocaleString()} reviews
          </p>
        </div>
        <div className="flex-1 space-y-1.5">
          {[5, 4, 3, 2].map((star) => (
            <div key={star} className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">{star}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    // width: `${ReviewData.ratingBreakdown[star] || 0}%`,
                    background: "#E8440A",
                  }}
                />
              </div>
              <span className="text-xs text-gray-400 w-8 text-right">
                {/* {ReviewData.ratingBreakdown[star] || 0}% */}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ReviewCard {...ReviewData} />
    </div>
  );
};

export default ReviewSection;
