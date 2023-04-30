import React from 'react'
import './secondSlide.scss'
import data from '../../assets/datas.json'


const SecondSlide = ({ data }) => {
    return (
        <div className="secondSlide">

            <div className="secondSlide__video">
                <div className="overlay"></div>
                <video src={data.url} autoPlay loop muted></video>
            </div>
            <div className="secondSlide__content">
                <div className="secondSlide__content_title">
                    {data.name}
                </div>
                <div className="secondSlide__content_subtitle">
                    {data.subtitle}
                </div>
            </div>
        </div>
    )
}

export default SecondSlide

console.log('asas', data.name)