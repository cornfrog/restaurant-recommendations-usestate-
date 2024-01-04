import React, { useState}from 'react'

import Review from "./Review"

import ReviewForm from './ReviewForm'

const ReviewList = (props) => {
  const [enteredReview, setEnteredReview] = useState({
    name: "",
    rating: "",
    content: ""
  })

  
  const reviews = props.data
  const [currentReviews, setReviews] = useState(reviews)
  const reviewElements = currentReviews.map((review, index) => {
    return <Review key={index} name={review.name} rating={review.rating} content={review.content}/>
  })
  
  // console.log("props.data: ", reviews)
  // console.log("Current Reviews: ", currentReviews)

  const addReviewToList = (reviewToAdd) => {
    const copyOfReviews = [...currentReviews, reviewToAdd]
    
    setReviews(copyOfReviews)
  }
  return(
    <div>
      {reviewElements}
      <ReviewForm 
        enteredReview={enteredReview}
        setEnteredReview={setEnteredReview}
        addReviewToList={addReviewToList}
      />
    </div>
  )
}

export default ReviewList
