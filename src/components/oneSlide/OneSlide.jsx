import React from 'react'
import './oneSlide.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Youtube from 'react-youtube'
import ReactPlayer from 'react-player'


const OneSlide = ({ selectedMovie, Youtube, renderTrailer }) => {

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'

    return (
        <div className='oneslide' style={{ backgroundImage: `url('${IMAGE_PATH}${selectedMovie.backdrop_path}')` }}>\
            {selectedMovie.videos ? renderTrailer() : null}
            <ReactPlayer />
            <div className="container">
                <div className="oneslide__bg"></div>
                <div className="oneslide__content">
                    <div className="oneslide__text">
                        <div className="oneslide__title _title"> {selectedMovie.title}</div>
                        <div className="oneslide__overview _overview">{selectedMovie.overview}</div>
                    </div>
                    <div className="oneslide__sections">
                        <button className='oneslide__show _btn _hover' >Посмотреть</button>
                        <div className="oneslide__info _btn _hover">
                            <button className='oneslide__info__button '>Инфо</button>

                            <AiOutlineInfoCircle className='oneslide__info__icon' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OneSlide