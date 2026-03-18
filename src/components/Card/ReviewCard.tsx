import React from "react";
import { HiMiniStar } from "react-icons/hi2";
type ReviewCardProps = {
  rating: number;
  reviewCount: number;
  ratingBreakdown: { [key: number]: number };
  reviews: {
    id: number;
    name: string;
    avatar: string;
    avatarBg: string;
    timeAgo: string;
    rating: number;
    text: string;
  }[];
};
const ReviewCard = (props: ReviewCardProps) => {
  const { rating, reviewCount, ratingBreakdown, reviews } = props;
  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div
          key={r.id}
          className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                style={{ background: r.avatarBg }}
              >
                {r.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                <p className="text-xs text-gray-400">{r.timeAgo}</p>
              </div>
            </div>
            <div>
              {/* <HiMiniStar className="text-yellow-400" /> */}
              {r.rating} ⭐{/* <HiMiniStar className="text-yellow-400" /> */}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            &ldquo;{r.text}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
