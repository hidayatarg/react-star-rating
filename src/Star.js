
import React from 'react'

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

export default Star


