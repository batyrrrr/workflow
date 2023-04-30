import React, { useEffect, useState } from 'react'
import './navbar.scss'
import logo from '../../../public/logo.png'
import { TbSearch } from 'react-icons/tb'

const heads = ['Sign In', 'Sign Up']




const Navbar = () => {
    const [width, setWidth] = useState('')

    useEffect(() => {
        const ui = () => {
            if (window.innerWidth > 1000) {
                setWidth(false)
            } else { setWidth(true) }
        }
        window.addEventListener('resize', ui)
        return window.removeEventListener('resize', ui)
    }
        , [])

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <img height={40} src={logo} alt="" />
                </div>
                <div className="navbar__actions">
                    <div className="navbar__gen">
                        <div className="navbar__search">
                            <TbSearch />
                        </div>
                        <div className="navbar__input">
                            <input type="text" placeholder='Поиск по сайту' />
                        </div>
                    </div>

                    <div className="navbar__sign">
                        {
                            heads.map((head, i) => (
                                <div className='navbar__sign__index' key={i}> {head}</div>
                            ))
                        }
                        {width ?
                            <div className="navbar__gen">
                                <div className="navbar__search">
                                    <TbSearch />
                                </div>
                                <div className="navbar__input">
                                    <input type="text" placeholder='Поиск по сайту' />
                                </div>
                            </div>
                            : ''
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar