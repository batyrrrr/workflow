import React from 'react'
import './card.scss'

const Card = ({ movie, selectMovie }) => {
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'



    return (
        <div className='cards' onClick={() => selectMovie(movie)}>
            {movie.poster_path ?
                <img className='cards__image' src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                : null
            }
            <h3>
                {movie.title}
            </h3>
        </div>
    )
}

export default Card