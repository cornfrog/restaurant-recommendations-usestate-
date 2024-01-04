import React, { useState } from "react"

import Restaurant from "./Restaurant"
import ReviewList from "./ReviewList"

import reviewData from "../constants/reviews"

const App = props => {
  const [reviews, setReviews] = useState(reviewData)

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>

          // future review form component here

          </div>

          <div className="cell">
            <h3>Reviews</h3>
              {/* create ReviewList component and pass 
              data from reviewData */}
              <ReviewList data={reviewData}/>
            // future review list component here
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
