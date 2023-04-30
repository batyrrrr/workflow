import React, { useCallback, useState } from 'react'
import logo from '../../../public/logo.png'
import './second.scss'
import { Link } from 'react-router-dom'

const SecondPage = () => {



    return (
        <div className="secondPage">
            <div className="container">
                <div className="secondPage__darker"></div>
                <div className="secondPage__logo">
                    <img width={190} src={logo} alt='logo' />
                </div>
                <div className="secondPage__content">
                    <div className="secondPage__title">
                        Смотрите где угодно, отменяйте в любое время
                    </div>
                    <div className="secondPage__info">
                        <input className='secondPage__input' type="text" placeholder='Your email address' />
                        <div className="secondPage__button">
                            <Link to='/Home'>
                                <button onClick={''} className='secondPage__button__wrapper'>Начать</button>
                            </Link>
                        </div>
                    </div>
                    <h5>Войдите в свою учетную запись, чтобы создать или возобновить членство</h5>
                </div>
            </div>
        </div>
    )
}

export default SecondPage