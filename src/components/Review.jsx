import React, { useState } from "react";

const Comment = ({ user, comment }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="border-2 shadow-2xl p-4 my-5 w-full h-36 rounded-md bg-slate-50">
      <h2 className="text-lg font-semibold">{user}</h2>
      <p className="text-gray-700">
        {showMore ? comment : comment.slice(0, 50)}
      </p>
      {comment.length > 50 && (
        <div>
          <span
            onClick={toggleShowMore}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {showMore ? "Show less" : "Show more"}
          </span>
        </div>
      )}
    </div>
  );
};

const Review = ({ review }) => {
  const { reviews } = review;

  return (
    <div className="max-w-md mx-auto  w-full">
      {reviews.map((review, index) => (
        <Comment key={index} user={review.user} comment={review.comment} />
      ))}
    </div>
  );
};

export default Review;
