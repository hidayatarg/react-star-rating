import React, {useState} from 'react';
import './App.css';


const Star = (props) => {
  const {starId, rating, onMouseEnter, onMouseLeave, onClick} = props
  let styleClass = 'star-rating-blank'
  if (rating > starId){
    styleClass = 'star-rating-filled'
  }
  console.log('gelen rating to start component: ', rating)
  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="55px"
        width="53px"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
}


function App() {
  // using hooks 
  const [rating, setRating] = useState(0)
  const [hoverState, setHoverState] = useState(0)
  // using 5 stars rating
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stars Rating</h1>
        <div className="flex-container">
          {
            stars.map((star, i) => (
              <Star
                key={i}
                starId={i}
                rating={hoverState || rating} 
                onMouseEnter={() => setHoverState(i+1)}
                onMouseLeave={() => setHoverState(0)}
                onClick={() => setRating(i+1)}
              />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
