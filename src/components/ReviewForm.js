import React from 'react'

const ReviewForm = (props) => {

    const userEntersName = (event) => {
        props.setEnteredReview({...props.enteredReview, [event.currentTarget.name]: event.currentTarget.value})
    }

    const userEntersRating = (event) => {
        props.setEnteredReview({...props.enteredReview, [event.currentTarget.name]: event.currentTarget.value})
    }

    const userEntersContent = (event) => {
        props.setEnteredReview({...props.enteredReview, [event.currentTarget.name]: event.currentTarget.value})
    }

    const submitReviewClicked = (event) => {
        event.preventDefault();
        const submittedReview = {...props.enteredReview}
        console.log(submittedReview)
        console.log(`Submitted Review:\nEntered Name: ${submittedReview.name}\nEntered Rating: ${submittedReview.rating}\nEntered Content: ${submittedReview.content}`)
        props.addReviewToList(submittedReview)
        clearFormElements()
    }

    const clearFormElements = () => {
        props.setEnteredReview({
            name: "",
            rating: "",
            content: ""
        })
        console.log(props.enteredReview)
    }
    return (
        <div>
            <form>
                <label htmlFor="name">
                    <input
                    type="text"
                    name="name"
                    onChange={userEntersName}
                    value={props.enteredReview.name}
                    />
                </label>

                <label htmlFor="rating">
                    <input
                    type="number"
                    name="rating"
                    onChange={userEntersRating}
                    value={props.enteredReview.rating}
                    />
                </label>

                <label htmlFor="content">
                    <input
                    type="text"
                    name="content"
                    onChange={userEntersContent}
                    value={props.enteredReview.content}
                    />
                </label>

                <input
                    type="submit"
                    name="rating"
                    value="Submit Review"
                    onClick={submitReviewClicked}
                />

            </form>
        </div>
    )
}

export default ReviewForm