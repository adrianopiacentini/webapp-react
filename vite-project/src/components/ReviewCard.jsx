function ReviewCard({ review }) {
    return (
        <div className="card">
            <div className="card-body">
                <h4>Scritta da: {review.name}</h4>
                <p>{review.text}</p> 
                <p>{review.vote} ⭐</p>
            </div>
        </div>
    )
}

export default ReviewCard