import React, { useState } from "react";
import reviews from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [idx, setIdx] = useState(0);
  const { name, job, image, text } = reviews[idx];

  const prevReview = () => {
    setIdx((prevIdx) => {
      if (prevIdx === 0) {
        return reviews.length - 1;
      } else {
        return prevIdx - 1;
      }
    });
  };

  const nextReview = () => {
    setIdx((nextIdx) => {
      console.log(idx);
      console.log(reviews.length - 1);
      if (nextIdx === reviews.length - 1) {
        return 0;
      } else {
        return nextIdx + 1;
      }
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    setIdx(randomNumber);
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button onClick={prevReview} className="button-container prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextReview} className="button-container next-btn">
          <FaChevronRight />
        </button>
        <div>
          <button onClick={randomReview} className="random-btn">
            Surpise me!
          </button>
        </div>
      </article>
    </>
  );
};

export default Review;
