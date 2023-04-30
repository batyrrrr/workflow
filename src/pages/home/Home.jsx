import React, { useEffect, useState } from 'react'
import './home.scss'

import Navbar from '../../components/navbar/Navbar'
import SwiperSlides from '../../components/swiper/SwiperSlides';

import axios from 'axios';

import maps from '../../../server/maps.json'
import Card from '../../components/card/Card';

import Youtube from 'react-youtube'
import ReactPlayer from 'react-player'

import 'bootstrap/dist/css/bootstrap.min.css'

import dataAsset from '../../assets/datas.json'



const Home = () => {
    const [states, useStates] = useState([{ id: 1, name: 'Batyr' }, { id: 2, name: 'Bolatbek' }])
    const [moreGenre, setMoreGenre] = useState(5)
    const [popularsLength, setPopularsLength] = useState(5)
    const [state, setState] = useState([
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }

    ])

    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({})
    const [popularMovies, setPopularMovies] = useState([])
    const [genres, setGenres] = useState([])

    const API_URL = 'https://api.themoviedb.org/3'
    const SEC_URL = '/discover/movie?sort_by=popularity.desc&'
    const API_KEY = 'api_key=56a168b702e76dadba0afb4d982b40fc'
    const movie_path = 'https://image.tmdb.org/t/p/w500/'

    const fetchGenres = async (id, more) => {
        const { data: { results } } = await axios.get(`${API_URL}${SEC_URL}${API_KEY}&with_genres=${id}`)
        const first5 = results.slice(0, moreGenre)
        setGenres(first5)
    }
    const LoadMore = async () => {
        const more = await setMoreGenre(moreGenre + 5)
        fetchGenres(more)
    }


    const fetchPopular = async () => {
        const { data: { results } } = await axios.get(`${API_URL}${SEC_URL}${API_KEY}`)
        setPopularMovies(results)
        console.log('populars', results)

    }

    const fetchMovies = async () => {
        const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
            params: {
                api_key: '56a168b702e76dadba0afb4d982b40fc'
            }
        })
        const getRandom = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        getRandom(1, 20)
        setMovies(results)
        setSelectedMovie(results[getRandom(1, 10)])
    }


    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: '56a168b702e76dadba0afb4d982b40fc',
                append_to_response: 'videos'
            }
        })
        return data
    }


    const selectMovie = async (movie) => {
        const data = await fetchMovie(movie.id)
        // console.log('movie data', data)
        setSelectedMovie(data)
    }



    useEffect(() => {
        fetchMovies()
        fetchPopular()
        fetchGenres()
    }, [])

    const renderMovies = () => (
        movies.map((movie) => (

            <Card key={movie.id} movie={movie} selectMovie={selectMovie} />
        ))

    )

    const renderTrailer = () => {
        const trailer = selectedMovie.videos.results.find(vid => vid.name === 'Official Trailer')
        const opts = {
            playerVars: {
                controls: 0,
                enablejsapi: 1,
                fs: 0,
                iv_load_policy: 3,
                autoplay: 1,
                mute: 1,
                showinfo: 0,
                disablekb: 1,
                loop: 1,
                modestbranding: 1
            }
        }
        return (

            <div className='ght'>
                <Youtube opts={opts} videoId={trailer.key} />
            </div>
        )
    }

    const genreId = async (index) => {
        const id = await fetchGenres(state[index].id)
    }
    // {trailer.key ? trailer.key : ''}

    // const getRandom = (min, max) => {
    //     min = Math.ceil(min)
    //     max = Math.floor(max)
    //     return Math.floor(Math.random() * (max - min + 1)) + min

    // }
    // getRandom(1, 3)
    return (
        <div className='home'>

            <Navbar />
            {/* {popularMovies.map((popular) =>
                <div>
                    <img src={`${movie_path}${popular.poster_path}`} alt="" />
                </div>
            )} */}
            <SwiperSlides renderTrailer={renderTrailer} Youtube={Youtube} selectedMovie={selectedMovie} />
            {/* {renderMovies()} */}
            {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe> */}
            {/* {state.map((obj)=>(
                <div>
            ))} */}
            {state.map((obj, index) =>
                <div onClick={() => genreId(index)} className='genres' key={obj.id}>{obj.name}</div>
            )}
            {genres.map((genre) =>
                <div>
                    <img height={100} src={`https://image.tmdb.org/t/p/original${genre.backdrop_path}`} alt="" />
                    <h1>{genre.title}</h1>
                </div>
            )}
            {genres.length === 20 ? '' :
                <button onClick={() => LoadMore()}>Load more</button>
            }
        </div>
    )
}

export default Home

   // {
    //     "url": "https://youtu.be/TPfqRV_sk-4",
    //     "name": "The Last Samurai (2023 Epic Trailer Remake)"
    // } 