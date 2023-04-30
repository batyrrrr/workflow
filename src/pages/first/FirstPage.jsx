import React, { useEffect, useState } from 'react'
import logo from '../../../public/logo.png'

import './first.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FirstPage = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4200/media')
                setDatas(response.data)
            } catch {
                console.log('Error')
            }
        }
        fetchData()
        console.log(datas.length)
    }, [])


    return (
        <div className="firstpage">
            <div className="container">
                <div className="firstpage__darker"></div>
                <div className="firstpage__logo">
                    <img width={190} src={logo} alt='logo' />
                </div>
                <div className="firstpage__content">
                    <div className="firstpage__title">
                        НЕОГРАНИЧЕННЫЕ ФИЛЬМЫ, TV ШОУ и МНОГОЕ ДРУГОЕ
                    </div>
                    <div className="firstpage__button">
                        <Link to='/get-start'>
                            <button className='firstpage__button__wrapper'  >Начать просмотр</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage