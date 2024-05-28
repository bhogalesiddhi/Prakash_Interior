
import React, { useState } from 'react';
import styled from 'styled-components';


const AddReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    max-width: 100%;
  }
`;

const NameLabel = styled.label`
  margin-right: 1rem;
  font-weight: bold;
`;

const AddReviewTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ReviewTextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
  min-height: 150px;
  margin-bottom: 1rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const NameInputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;
const RatingLabel = styled.label`
  margin-right: 1rem;
  font-weight: bold;
`;

const StarInput = styled.input`
  appearance: none;
  &::before {
    content: '★'; /* Update content if desired */
    font-size: 2rem;
    color: #ddd;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }

  &:checked::before {
    color: gold;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;

const NameInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 0rem;
  /* Add optional styles if name is required */
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  /* Display only when there's an error */
`;



const AddReview = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState([]); // Array to store selected ratings
  
    const handleStarChange = (e) => {
      const newRating = [...rating]; // Create a copy of the state
      if (e.target.checked) {
        newRating.push(parseInt(e.target.value)); // Add selected value
      } else {
        const index = newRating.indexOf(parseInt(e.target.value));
        newRating.splice(index, 1); // Remove deselected value
      }
      setRating(newRating);
    };

    const handleNameChange = (e) => {
        setName(e.target.value); // Update name state on input change
      };
  
    return (
      <AddReviewContainer>
        <AddReviewTitle>Add Your Review</AddReviewTitle>
        <ReviewForm>
        <NameInputContainer>
          <NameLabel htmlFor="name">Your Name (Optional):</NameLabel>
          <NameInput
            type="text"
            id="name" // Add an ID for the label association
            placeholder="Your Name (Optional)"
            value={name} // Set value from name state
            onChange={handleNameChange}
          />
        </NameInputContainer>
          {/* Name input (optional) */}
          {/* <NameInput type="text" placeholder="Your Name (Optional)" /> */}
          <ReviewTextArea placeholder="Write your review here..." />
          <RatingContainer>
            <RatingLabel>Rating:</RatingLabel>
            <StarInput
              type="checkbox"
              name="rating"
              value="1"
              onChange={handleStarChange}
              checked={rating.includes(1)} // Check if value is in rating array
            />
            <StarInput
              type="checkbox"
              name="rating"
              value="2"
              onChange={handleStarChange}
              checked={rating.includes(2)}
            />
            <StarInput
              type="checkbox"
              name="rating"
              value="3"
              onChange={handleStarChange}
              checked={rating.includes(3)}
            />
            <StarInput
              type="checkbox"
              name="rating"
              value="4"
              onChange={handleStarChange}
              checked={rating.includes(4)}
            />
            <StarInput
              type="checkbox"
              name="rating"
              value="5"
              onChange={handleStarChange}
              checked={rating.includes(5)}
            />
          </RatingContainer>
          <SubmitButton>Submit Review</SubmitButton>
          {/* Display error message if needed */}
          <ErrorMessage></ErrorMessage>
        </ReviewForm>
      </AddReviewContainer>
    );
  };
  
  export default AddReview;