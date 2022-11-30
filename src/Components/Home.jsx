import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiOutlinePlus,AiOutlinePlayCircle} from 'react-icons/ai'



import '../Style/home.scss';

const popularMovieApi = 'https://api.themoviedb.org/3/movie/popular?api_key=ba1e0b6e2201546c3fbc9d90aee7cdb4&language=en-US&page=1';
const upcommingMovieApi ='https://api.themoviedb.org/3/movie/upcoming?api_key=ba1e0b6e2201546c3fbc9d90aee7cdb4&language=en-US&page=1';
const topRatedApi = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ba1e0b6e2201546c3fbc9d90aee7cdb4&language=en-US&page=1';
const nowPlayingApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ba1e0b6e2201546c3fbc9d90aee7cdb4&language=en-US&page=1';
const gernreApi ='https://api.themoviedb.org/3/genre/movie/list?api_key=ba1e0b6e2201546c3fbc9d90aee7cdb4&language=en-US'





const Card =({img})=>{
  return <img className='card' src={img} alt="loading"/>
}

const Row =({title ,arr})=>{

  return <div className='row'>
    <h2>{title}</h2>
    <div>
{
arr&&arr.map((elm)=>{
  return (
  <Card key={elm.id} img={`https://image.tmdb.org/t/p/w500/${elm.poster_path}`}/>
  )
})
}
    </div>
   
  </div>
}

const Home = () => {

  const [popular ,setPopular] = useState([]);
  const [upcomming,setUpcomming]=useState([]);
  const [topRated,setTopRated]=useState([]);
  const [nowPlaying,setNowPlaying] = useState([]);
  const [genreList ,setGenreList] =useState([]);

  useEffect(()=>{
    const fetchDataForPopular = async ()=>{
     const {data : {results}} = await axios.get(popularMovieApi)
     setPopular(results);

    }

    const fetchDataForUpcomming = async ()=>{
      const {data :{results}} =await axios.get(upcommingMovieApi);
      setUpcomming(results)
    }

    const fetchDataForTopRated = async ()=>{
      const {data :{results}} = await axios.get(topRatedApi)
      setTopRated(results);
    } 

    const fetchDataForNowPLaying = async ()=>{
      const {data :{results}} = await axios.get(nowPlayingApi)
      setNowPlaying(results);
    }
    

const fetchGenreApi = async ()=>{
  const {data} =await axios.get(gernreApi)
  setGenreList(data.genres);

    }

    fetchGenreApi();
    fetchDataForPopular();
    fetchDataForUpcomming();
    fetchDataForTopRated();
    fetchDataForNowPLaying();
    

  },[])

  return (
    <section className="home">
      <div className="banner">
        <div className='heading'>
          <h1>FANTASTIC MOVIES </h1>
          <span> A film synopsis is typically a one-page document that summarizes your film. <br /> It contains the film's title, genre, logline 
            (a one-sentence summary), <br /> and a five-paragraph explanation
             of the film's storyline, major <br /> plot points, and key characters. The importance of our climate is being highlighted by various sources with <br />
              increasingly regularity, and both businesses and consumers are becoming ever more aware of their own impact on the world around us.

As such, </span>
        <div className="icons">
              <button className='play'>
          <AiOutlinePlayCircle/>  <p>Play</p>
              </button>
              <button className='list'>
              <p> My List</p> <AiOutlinePlus />
              </button>
        </div>
        </div>

      <img src={`https://i.cdn.newsbytesapp.com/images/l70420220408162006.jpeg?tr=w-720`} alt="cover"  />
      </div>
      <Row title={'Popular Movies'} arr={popular} />
      <Row title={'Upcomming Movies'} arr={upcomming} />
      <Row title={'Top Rated Movies'} arr={topRated} />
      <Row title={'Now Playing Movies'} arr={nowPlaying} />

    <div className='genre'>
    {
      genreList.map((elm)=>{
        console.log(elm)
        return (

          <h3 className='genre__element'>{elm.name}</h3>

        )
      })
    }
    </div>


    </section>


  )
}

export default Home